# Reducers

While the term *reducer* may sound esoteric or strange, the concept behind
it is very simple.

A *reducer* is a function which accepts two parameters, the *current state*
and an *action*, and returns the *new state*.

## Simple Reducer

```js
function add(val, i) {
    return val + i;
}
```
The above function already fulfills the *reducer* contract. It takes
the current state (`val`) and an action (`i`) and returns a new state (`val + i`).

At their core, the *reducers* used in Melody are just as simple as the above
example.

Because of their nature, you can use most of the utility function provided
by [Redux](http://redux.js.org) to make maintaining reducers easier.

## `combineReducers`

Though less common when working with components, you can use the `combineReducers`
function provided by Redux to split the work of calculating the new state
of a Component by the state objects properties.
```js
// reducers.js
export function bestPriceChanged(bestPrice, action) {
    return action.type === BEST_PRICE_CHANGED
        ? action.payload
        : state;
}

export function galleryImageChanged(gallery, action) {
    switch(action.type) {
        case NEXT_IMAGE:
            return { currentImage: gallery.currentImage + 1 };
        case PREV_IMAGE:
            return { currentImage: gallery.currentImage - 1 };
    }
    return gallery;
}

// Item.js
import {combineReducers} from 'redux';
import * as stateReducers from './reducers.js';

const stateReducer = combineReducers(stateReducer);
```

## More details

Since this concept is literally identical to the one employed by
[Redux](http://redux.js.org), please take a look at their [documentation
about reducers](http://redux.js.org/docs/basics/Reducers.html) to get a better understanding of the concept.
