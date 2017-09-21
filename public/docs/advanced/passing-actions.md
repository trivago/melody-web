# Passing Action Dispatchers to Child Components

When you create larger components, you'll often split them into multiple components
by making certain parts child components.

Let's say you have a list of todo items. Your list maintains the state (an array of todo items).
While you could just put the entire functionality into the List Component, it is usually advisable
to instead create an Item Component that has to care only about a single todo item.

However, given that you'll want to be able to toggle or delete a todo item, we now need to figure out
a way to allow the Item Component to dispatch actions to its parent component (the List Component).

## Action Dispatchers

For this purpose, we need to add an Action Dispatcher to the state of your component. An Action Dispatcher
is an Action Creator that is bound to the `dispatch` function of a component.
Assuming that `this` refers to a Component instance, you could write the following code to create an Action Dispatcher:

```js
// an action creator
const submit = () => ({ type: 'SUBMIT' });
// an action dispatcher
const dispatchSubmit = () => this.dispatch(submit());
// usage:
dispatchSubmit();
// will always dispatch the submit action to the component
```

To make it easier to do this, Melody offers a utility method that can assist you.

### Example

Assuming you have created a reducer similar to the following:

```js
import { dispatchToState } from 'melody-util';
import reduceReducers from 'reduce-reducers';

const stateReducer = (state = { items: [] }, action) {
  // the reducer for your component
};

// pass in an object of action creator functions
const dispatchReducer = dispatchToState({
  deleteItem(itemId) {
    return { type: 'DELETE_ITEM', payload: itemId };
  },
  toggleItem(itemId) {
    return { type: 'TOGGLE_ITEM', payload: itemId };
  }
});

// combine them to a single reducer and export for usage in a component
export default reduceReducers(dispatchReducer, stateReducer);
```

And that you have passed those values to your Item Component within your template, like this:

```twig
{% mount './Item' as "#{item.itemId}" with {
  item: item,
  deleteItem: deleteItem,
  toggleItem: toggleItem
} %}
```

You'd now be able to access those methods within the Item Component:

```js
import { createComponent } from 'melody-component';
import { bindEvents } from 'melody-hoc';
import Item from './Item.twig';

const ItemComponent = createComponent(Item);
const enhance = bindEvents({
  deleteButton: {
    click(event) {
      this.props.deleteItem(this.props.item.itemId);

      // stop event
      event.preventDefault();
      event.stopPropagation();
    }
  },
  selected: {
    change(event) {
      this.props.toggleItem(this.props.itemId);
    }
  }
});

export default enhance(ItemComponent);
```

If you're wondering what `bindEvents` does, please take a look at [higher order components](../hoc/hoc.md).