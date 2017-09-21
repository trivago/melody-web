# Actions

An *Action* in Melody is, essentially, an instruction that tells the
*Reducer* how it should calculate the new state.

When using Melody, every *Action* must be a plain JavaScript _Object_
and is required to have a `type` property which is used to identify it.

## Action types

As a best practice the `type` of an Action should be a string literal.
This will make it easier to debug your code. However, since string literals
can't be easily refactored and aren't suitable for auto-completion, the
best practice is to document action types by using constants.
```js
export const OPEN_SLIDEOUT = 'openSlideout';
```

## Action creators

Usually it is a good idea to define an *action creator*, a function which
creates the action object.
```js
export function openSlideout(slideoutType) {
    return {
        type: OPEN_SLIDEOUT,
        payload: { slideoutType }
    };
}
```
You might wonder why we're assigning the `slideoutType` to a `payload`
property instead of adding it to the Action directly.

We do this to follow the [Flux Standard Action](https://github.com/acdlite/flux-standard-action)
approach, which makes our Action structure predictable and easier to work with.

## Dispatching Actions

Every Melody component has a `dispatch` method, which accepts an Action
and will use its *Reducer* to calculate its new state. By default, if the
state did not change, the component will not be re-rendered. If, however,
the state of the component did change, then Melody will re-render the
Component and apply the new state to the component.

In order to be as efficient as possible, there is no guarantee about when
the new state will be applied to the component or when it will be re-rendered.
The only rule is that both will happen as soon as possible, but not sooner.

This principle allows Melody to batch state changes and to pick an optimal
point in time for rendering a component.

## `RECEIVE_PROPS`
Melody follows its own principles. Instead of adding a special case or
some magic handling for properties, which are passed to a component from
the outside, Melody dispatches a standard action, `RECEIVE_PROPS`.

The default *Reducer*, which is used if you don't specify your own, will
just return the props passed to it as the new state.

You are, however, free to handle property changes in any way you want.
```js
import {RECEIVE_PROPS} from 'trv-melody';

export function propsToState(state, action) {
    if(action.type === RECEIVE_PROPS) {
        if(action.payload.itemId !== state.itemId) {
            // the item that we're rendering changed!
            return {
                ...state,
                itemId: action.payload.itemId,
                item: action.payload.item
            };
        }
    }
    return state;
}
```
### payload: Object

The payload of a `RECEIVE_PROPS` action is an object containing
the properties passed to the component.

### meta: Component

The `RECEIVE_PROPS` provides the Component instance that is dispatching
the property change through its `meta` property.
You could use this ability for example to add bound action dispatchers
to your state so that you can pass them down to a child component.
Whether you should do that depends on your use case but in most cases
the answer is a simple *no*.
