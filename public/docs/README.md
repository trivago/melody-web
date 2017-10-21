# Readme

Melody is a UI framework for JavaScript applications.

It helps you to write solid, high performance applications following best
practices and with a clear separation of concerns.
The view layer is cleanly delegated to templates (Twig) which it compiles
to highly efficient JavaScript DOM patching instructions.

This approach allows you to keep unchanged DOM nodes, reduces the memory
usage of your application and improves the rendering performance of both,
your application and the browser rendering it.

The preferred data layer for Melody applications is [Redux](http://redux.js.org)
and the component API provided by Melody actually follows many of the same ideas as Redux.

## Twig

Twig is the standard templating language used by the Symfony framework.
It offers many useful and powerful features such as macros and template
inheritance.

Melody limits the expressiveness provided by Twig in order to generate
highly efficient DOM instructions. As a general rule of thumb, you should
write valid HTML templates which contains Twig expressions.

See the [Twig](twig/intro.md) section for further information.

### Exporting an element to a Component

Often, it will be useful to export an element so that a component can
gain access to it.

In Melody, this can be done through the `ref` attribute:

```twig
<button ref="reviewTrigger">Reviews</button>
```

This will make the element available within the component.

## Rendering a template

Before we start talking about Components and how they make everything easier and
more performant, we should discuss how to render a template manually.

When rendering a template manually and don't want Melody to throw away
the initial DOM, you need to make sure that the keys of elements match.
Since you'd usually use the same template on the client and server side,
that should not be a problem but it is something you should keep in mind.

### patch: Rendering into an element

If you want to render a template into an element, you'll need to use the `patch` function
exported through `melody-idom`.

```js
import { patch } from 'melody-idom';
import template from './twig/template.twig';
patch(document.querySelector('#app'), () => {
    const context = {
        passed: 'to',
        the: 'template'
    };
    // will render the template as child of the element
    template.render(context);
});
```

### patchOuter: Rendering an element

While rendering into an element is usually what you want to do, there are occasions
where you'll want to offer control over an existing element to a template.

In those cases, you can use the `patchOuter` method.

```js
import { patchOuter } from 'melody-idom';
import template from './twig/template.twig';
patchOuter(document.querySelector('#app'), () => {
    const context = {
        passed: 'to',
        the: 'template'
    };
    // will render the template as the element, patching it
    // if necessary
    template.render(context);
});
```

## Components

In order to be even more efficient and to support you in creating a
better structure for your application, Melody offers support for Components.

When creating the Component-API for Melody, we have chosen to learn from
popular frameworks and to apply what we've learned from them.

Thus, Melody-Components are optimized for immutable data from the start.
To use immutable data and benefit from this optimization, you should make
sure that you do not modify an existing object that is being used during the
rendering process. If you need to change it, you should instead create a
copy and change the copy. Once Melody has access to the copied object, it
should be considered immutable as well.

Given those optimizations, you can create your Component in JavaScript as
easy as this:

```js
// Item.js
import {createComponent} from 'melody-component';
import itemTemplate from './Item.twig';

export default createComponent(itemTemplate);
```

and use it from Twig like this:

{% raw %}
```twig
{% mount './Item' as 'item-#{item.id}' with item %}
```
{% endraw %}

The above will assign the `key` `item-#{item.id}` (i.e. item-45) and will
set the `item` as the properties of the component.

### Properties and State

Properties are given to a Component from the outside, i.e. the place
where the Component is mounted into the document.

Every component is able to maintain its own state and it is that internal
state which is passed to the template to render. By default, all Properties
given to the Component will be converted to internal state and will thus be
available within the template.

Melody uses that fact to optimize its rendering process, skipping components
whose state didn't change (using reference comparison).
This means that the `Item` component we defined above will only ever
be re-rendered if the `item` is replaced.

This behaviour can of course be overridden but due to its efficiency and simplicity
it is highly advisable to leave it as is.

### Managing state using a reducer

State management in Melody is done using a `reducer` function. Such a function
receives the current state of the component and something called an `Action`,
an object which describes the change that should be applied to the components
state.

```js
// Item.js
import {createComponent, RECEIVE_PROPS} from 'melody-component';
import itemTemplate from './Item.twig';

function stateReducer(state, action) {
    switch(action.type) {
    case RECEIVE_PROPS:
        return action.payload;
    case 'openSlideout':
        // Note: We create a modified copy of the original state
        // if we changed the previous state object instead,
        // the component would not be rendered again
        // (unless we did some extra work)
        return Object.assign({}, state, {
            openSlideout: action.payload.slideoutType
        });
    }
    return state;
}

export default createComponent(itemTemplate, stateReducer);
```

The `reducer` function is just that: a simple function without `this` context.
`reducers` can be composed and wrapped in any way you'd like, which allows
you to create even complex logic out of simple and easy to test functions.

### Composition > Inheritance: Mixins

Melody does not use classes for components and therefore doesn't allow you
to use inheritance to share common behaviours between components.

Instead, Melody employs the concept of *mixins*. A `mixin` can be either
an object which is added to the component (and thus overrides methods
defined within the object) or it can be a function which receives
the original component object (a prototype object) and returns an
object which is then added to the component.

```js
import {createComponent, RECEIVE_PROPS} from 'melody-component';
import itemTemplate from './Item.twig';

function stateReducer(state, action) {
    switch(action.type) {
    case RECEIVE_PROPS:
        return action.payload;
    case 'openSlideout':
        // I've read the previous example and know that I shouldn't
        // do this, but I don't care!
        state.openSlideout = action.payload.slideoutType;
        return state;
    }
    return state;
}

const AlwaysRerenderMixin = {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
};

const SlideoutOpenerMixin = function(proto) {
    const { componentDidMount } = proto;
    return {
        componentDidMount() {
            componentDidMount.call(this);
            this.refs.reviewTrigger.onclick = event => {
                this.dispatch({
                    type: 'openSlideout',
                    payload: {
                        slideoutType: 'rating'
                    }
                });
            };
        }
    };
};

export default createComponent(
    itemTemplate,
    stateReducer,
    AlwaysRerenderMixin,
    SlideoutOpenerMixin
);
```

This approach allows you to create small, focused units of functionality
that can be reused across components.
