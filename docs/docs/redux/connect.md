# Connecting a Component to a Redux Store

In order to connect a Melody Component to a Redux Store that was [provided](provide)
to it, you'll need to use the `connect` function from `melody-redux`.

## `connect(mapStateToProps?, mapDispatchToProps?, mergeProps?): (Component) => Component`

The function signature might seem complicated at first but its usage is actually quite
easy. When you invoke `connect` it returns a function which expects a Component and
returns a wrapped Component that is connected to the store.
This is called a "curried function". All three parameters of `connect` are optional
and a sensible default will be used if you do not supply an implementation.

### `mapStateToProps: (state, ownProps): Object`

The `mapStateToProps` parameter is expected to be a *Function* which accepts
the current state of the Redux Store and optionally the properties given
to the component. It is expected to return an object which is then used as the
properties that are being passed to the wrapped component.

As a rule of thumb you should not declare the `ownProps` parameter unless you
actually need it, since Melody will have to do a lot more work if that parameter
is present and has a harder time to prevent unnecessary renderings in that case.

### `mapDispatchToProps: (dispatch, ownProps): Object`

The `mapDispatchToProps` parameter is expected to be a *Function* which accepts
the `dispatch` method of the provided Redux Store and return an object which contains
_bound action creators_, i.e. functions that dispatch their action through the given
`dispatch` function.

Similar to `mapStateToProps` the returned object is passed as properties to the
wrapped component and you should avoid to declare the `ownProps` parameter unless
you really need it.

In order to prevent some unnecessary boilerplate, `mapDispatchToProps` can also
be an object whose property values are *action creators* which will be wrapped in
`dispatch` invocations.

### `mergeProps: (stateProps, dispatchProps, ownProps): Object`

The `mergeProps` function is used to combine the properties returned by the
other functions into a single property object that is then passed as properties
to the wrapped Component.

In most cases, the default implementation will do the right thing and you won't
need to manually specify an implementation for it.

By default, it will return the value of `Object.assign({}, ownProps, stateProps, dispatchProps)`,
thus combining all provided values into a single object.

## Example

```js
import {createComponent} from 'melody-component';
import {connect} from 'melody-redux';
import template from './index.twig';
import { refresh } from './actions';

// create the (presentational) component
// this would ideally happen in another file
const ItemList = createComponent(template);

// assuming state is normalized so that `itemList` is an array
// of item ids and `items` is an object containing the actual items
function mapStateToProps(state) {
    return {
        items: state.itemList.map(id => state.items[id])
    };
}

// wrap the `refresh` action into a function that invokes
// the stores `dispatch` function
function mapDispatchToProps(dispatch) {
    return {
        refresh: () => dispatch(refresh())
    };
}

// create the container component which wraps the `ItemList` component
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
```

Alternatively, if you prefer less boilerplate, you could also do this:

```js
import {createComponent} from 'melody-component';
import {connect} from 'melody-redux';
import template from './index.twig';
import { refresh } from './actions';

const ItemList = createComponent(template),
      mapStateToProps = state => ({
          items: state.itemList.map(id => state.items[id])
      }),
      mapDispatchToProps = { refresh };

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
```

In this case the object assigned to `mapDispatchToProps` will be
converted into an object where each of its properties are
assumed to be action creators and they'll be bound to the `dispatch`
function of the `Store` automatically.

Within the `ItemList` component, you'd now be able to access the items from the store
through `this.props.items` and the refresh action dispatcher through `this.props.refresh`.

Since the default reducer for components just assigns the state to be whatever was provided
as properties, you'll also be able to access both using `this.state.items` and `this.state.refresh`,
which means they'll also be available for usage within the imported template.

## Screencasts

In the following screencasts you can find an example of how to connect a [provided](./provide.md)
Redux Store. The example is using React and `react-redux` but the principle can
be applied for the `connect` function of Melody `melody-redux` as well.

1. [Redux: Generating Containers with connect() from React Redux (VisibleTodoList)](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist)
2. [Redux: Generating Containers with connect() from React Redux (AddTodo)](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-addtodo)
3. [Redux: Generating Containers with connect() from React Redux (FooterLink)](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-footerlink)
