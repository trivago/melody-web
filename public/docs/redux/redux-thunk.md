# Redux Thunk

Redux Thunk [middleware](../intro/middleware.md) allows you to write action
creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch
only if a certain condition is met.
The inner function receives the store methods dispatch and getState
as parameters.

## Usage:

Import from `redux-thunk` and simply apply it as [middleware](../intro/middleware.md) to your component:

```js
import {createComponent} from 'melody-component';
import {applyMiddleware} from 'melody-util';
import thunkMiddleware from 'redux-thunk';

export default createComponent(
    template,
    stateReducer,
    // apply the middleware
    applyMiddleware(thunkMiddleware)
);
```

Now instead of normal action creators that just return an object you can
return a function that uses the `dispatch` function or the `dispatch` and
`getState` function.

Normal action creator:
```js
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}
```

Action creator that returns a function to perform asynchronous dispatch:
```js
function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

Action creator that returns a function to perform conditional dispatch:
```js
function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
```

[Official documentation page](https://github.com/gaearon/redux-thunk/blob/master/README.md)
