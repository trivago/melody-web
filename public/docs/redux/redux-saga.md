# Redux Saga

`redux-saga` is a library that aims to make side effects (i.e. asynchronous
things like data fetching and impure things like accessing the browser cache)
in React/Redux applications easier and better.

The mental model is that a saga is like a separate thread in your application
that's solely responsible for side effects. `redux-saga` is a redux middleware,
which means this thread can be started, paused and cancelled from the main
application with normal redux actions, it has access to the full redux
application state and it can dispatch redux actions as well.

It uses an ES6 feature called Generators to make those asynchronous flows easy
to read, write and test. *(if you're not familiar with them
[here are some introductory links](https://redux-saga.github.io/redux-saga/docs/ExternalResources.html))*
By doing so, these asynchronous flows look like your standard synchronous
JavaScript code. (kind of like `async`/`await`, but generators have a few more
awesome features we need)

You might've used [redux-thunk](./redux-thunk.md) before to handle your data
fetching. Contrary to redux thunk, you don't end up in callback hell, you can
test your asynchronous flows easily and your actions stay pure.

## Usage

For easier understanding, we have copied an example from the official redux-saga documentation
([link](https://github.com/redux-saga/redux-saga/blob/master/README.md)).

Suppose we have an UI to fetch some user data from a remote server when a button
is clicked. (For brevity, we'll just show the action triggering code.)

```js
// ...
onSomeButtonClicked() {
  const { userId, dispatch } = this.props;
  dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
}
// ...
```

The Component dispatches a plain Object action to the Store. We'll create a Saga
that watches for all `USER_FETCH_REQUESTED` actions and triggers an API call to
fetch the user data.

#### `saga.js`

```js
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '...';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

To run our Saga, we'll have to connect it to the Redux Store using the
`redux-saga` middleware.

#### `main.js`

```js
import {createComponent} from 'melody-component';
import {applyMiddleware} from 'melody-util';
import createSagaMiddleware from 'redux-saga';

import template from './template';
import stateReducer from './reducer';
import mySaga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const myComponent = createComponent(
    template,
    stateReducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);

// render the application
```

[Official documentation page](https://github.com/redux-saga/redux-saga/blob/master/README.md)
