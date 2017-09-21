#Components

In order to be even more efficient and to support you in creating a better structure for your application, Melody offers support for Components.

When creating the Component-API for Melody, we have chosen to learn from popular frameworks and to apply what we've learned from them.

Thus, Melody-Components are optimized for immutable data from the start. To use immutable data and benefit from this optimization, you should make sure that you do not modify an existing object that is being used during the

rendering process. If you need to change it, you should instead create a copy and change the copy. Once Melody has access to the copied object, it should be considered immutable as well.


Given those optimizations, you can create your Component in JavaScript as easy as this:


```js
// Item.js

import {createComponent} from 'trv-melody';

import itemTemplate from './Item.twig';

export default createComponent(itemTemplate);
```

and use it from Twig like this:


```twig
{% mount './Item' as 'item-#{item.id}' with item %}
```

The above will assign the `key` `item-#{item.id}` (i.e. item-45) and will set the `item` as the properties of the component.



## Properties and State

Properties are given to a Component from the outside, i.e. the place where the Component is mounted into the document.

Every component is able to maintain its own state and it is that internal state which is passed to the template to render. By default, all Properties given to the Component will be converted to internal state and will thus be

available within the template.



Melody uses that fact to optimize its rendering process, skipping components

whose state didn't change (using reference comparison).

This means that the `Item` component we defined above will only ever

be re-rendered if the `item` is replaced.



This behaviour can of course be overridden but due to its efficiency and simplicity it is highly advisable to leave it as is.



### Managing state using a reducer



State management in Melody is done using a `reducer` function. Such a function

receives the current state of the component and something called an `Action`,

an object which describes the change that should be applied to the components

state.



```js
// Item.js

import {createComponent, RECEIVE_PROPS} from 'trv-melody';

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
import {createComponent, RECEIVE_PROPS} from 'trv-melody';

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
