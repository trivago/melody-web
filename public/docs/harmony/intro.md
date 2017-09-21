# Usage with Harmony.js

While we recommend using Melody with Redux to handle state due to its small size and natural fit
for immutable data which Melody uses to achieve spectacular performance out of the box, it can, of course
be used together with Harmony.js as well and is an improvement to that framework.

## Relationship with Harmony.js

At their cores, Melody is a view framework, Redux is a framework for state handling and Harmony is an
application framework that, due to its heritage from Backbone, also offers view and state handling but is
nowhere near as specialized as Melody and Redux.

Thus, it makes sense to use all three of those frameworks together when creating large and modular applications.

## View integration

Harmony provides the `BaseView` and `CompositeView` classes to manage views.
Both of them make integrating Melody rather easy by simply defining a Mixin:

```js
import {patch} from 'trv-melody/idom';

// A mixin for rendering a Melody template within a BaseView
export const MelodyBaseViewMixin = {
    render(context) {
        patch(this.el, () => {
            this.template.render(context);
        });
    }
};

// A mixin for rendering a Melody template within a CompositeView.
export const MelodyCompositeViewMixin = {
    renderWithTemplate(context, template = this.template) {
        if(!template) {
            return this;
        }
        this.triggerMethod('before:render:with:template');
        patch(this.el, () => {
            template.render(context || this.serializeData());
        });
        this.triggerMethod('render:with:template');
        return this;
    }
};
```

Similar mixins could be created to support rendering Melody components instead of plain Melody templates.

### The best View for the job

Because of how Harmony works, its `CollectionView` and `CompositeView` classes
had to do a lot of work like constantly finding the appropriate elements
since by default they would just be replaced with new ones.
Especially the `CollectionView` has to do a lot of work and is prone to
errors and issues. All of that work is no longer necessary when using
Melody since it keeps the elements persistent unless they are actually not
needed anymore. This means that many of the protections that Harmony implements,
like constantly removing and adding event handlers, should no longer be required.

As a consequence, when using Melody within a Harmony View, you should choose
the `BaseView` as the class to inherit from. It does far less unnecessary work
and is a better fit. Harmonys concept of `Behaviours` can be replaced with
Melody components and their mixins which offer the same benefits but
have a cleaner and easier to use API.

## Rules for data

If you intend to feed a Melody Component with data from a `Harmony.Model`, `Harmony.Store` or `Harmony.Collection`
you *must* call its `toJSON` method before. All of them mutate their state on change which means that Melody components
by default will prevent rendering due to their assumption of immutable state. By using `toJSON` you can work around that
situation. This will, however, cause unnecessary re-renderings and implies creating unnecessary objects.
Which is we recommend to use Redux instead.

## Events

When looking at the usual Redux examples and documentation, you might notice that they focus on working with
a single store for the entire application and that they try to find solutions for every problem that
involves using Redux.

While that approach might work, there is a decent chance that you shouldn't do that. Instead, using an application
framework like Harmony with its powerful `EventSource` and `Lookup` features, can be a much better approach.

Just like you might want to redefine the word `application`. For example, our Hotel Search website might be considered
a single application. You might, however, also define the filters, the dealform and the item list to be individual
applications which are contained within the hotel search application. When using this approach, it becomes obvious
that each of them should have its own Redux store. But then, how do those parts communicate?

The solution to that problem could be Harmony. Just use the `createLookup` and `createAction` to communicate between
the sub-applications / modules and connect them to the applications store.

```js
import { change, store as regionSearch } from 'regionsearch';
import store from './filterStore';

change.on(() => {
    store.dispatch({
        type: 'REGIONSEARCH_UPDATE'
        payload: regionSearch.getState()
    });
});
```
