# Middleware

The concept of dispatching actions in Melody is very simple. `dispatch`
immediately sends the `action` to the Component and the `state` is
updated according to the `reducer`.

Sometimes, however, you may need more power or flexibility. This can be
easily achieved using [Mixins](./mixins.md).
But while mixins enable this style of usage, wouldn't it be nice if we had
a nicer API for this purpose?

## Compatibility with Redux

When implementing the Melody version of `applyMiddleware`, we've taken
some care to make sure that it works with standard Redux middleware.

We've tested this with [redux-thunk](../redux/redux-thunk.md),
[redux-saga](../redux/redux-saga.md) and `redux-promise` but you should be
able to use any other middleware as well.

## Applying Middleware

In order to use a Middlewares, you need to import the `applyMiddleware` function
from `trv-melody/util`.

```js
import {createComponent} from 'trv-melody/component';
import {applyMiddleware} from 'trv-melody/util';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import template from './template.twig';
import stateReducer from './reducer.js';

export default createComponent(
    template,
    stateReducer,
    // apply the middleware
    applyMiddleware(thunkMiddleware, promiseMiddleware)
);
```

With this setup, you can dispatch standard actions, actions that are promises
and actions that are functions, receiving the `dispatch` function and a `getState`
function and thus are capable of spawning their own actions.

## More information

This introduction should be considered *Work in Progress* but since Melody
and Redux Middleware are quite compatible you can take a look at the 
[Redux Manual](http://redux.js.org/docs/advanced/Middleware.html).
