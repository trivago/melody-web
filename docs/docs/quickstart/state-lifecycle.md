# State and Lifecycle

Every Component is able to maintain its own internal state. By default, all properties given to a Component will be converted to internal state and will be available within the template.

Melody uses this to optimize its rendering process, skipping components whose state didn't change, using reference comparison and also a shallow equality check that compares state updates. This means that a component will only ever re-render if its state object is explicitly changed.

This behaviour can be overridden but due to its efficiency and simplicity it is highly advisable to leave it as is.

### Managing state using a reducer

State management in Melody is done using a `reducer` function (similar to [Redux](http://redux.js.org)). Such a function receives the current `state` of the component and an `action`, an object which describes a change that should be applied to the component's state.
You then `dispatch` actions to the reducer, which returns the next `state`.

## **Counter Example**

### **Template**

`template.twig`
```twig
<div id="app">
    <h1>{{ count }}</h1>
</div>
```

### **Adding local state to a component**

`Counter.js`
```js
import { createComponent, render } from 'melody-component';
import template from './template.twig';

const stateReducer = (state, action) => {
    // We need to define the initial state for the component,
    // in this case: the counter's initial value
    if(state === undefined) {
        return {
            count: 0
        };
    }

    // For any other cases, a reducer should 
    // always return the received 'state'
    return state;
}

// We create the component passing in the template and the reducer
const component = createComponent(template, stateReducer);

render(document.querySelector('#app'), component);
```

The `reducer` function is just a simple function, without `this` context, that returns the next `state`.

The initial counter value will be rendered from `state` into the component `template`.

`Reducers` can be composed and wrapped in any way you'd like, which allows you to create even complex logic out of simple and easy to test functions.

### **Adding lifecyle hooks to a component**

In some cases, we want to run some code when a component mounts and unmounts, we can declare special `lifecycle` hooks on the component to acheive this.

To add `lifecyle` hooks and other enhancements to your component Melody provides a collection of higher order functions/components.

`Counter.js`
```js
import { createComponent, render } from 'melody-component';
import { lifecycle } from 'melody-hoc';
import template from './template.twig';

const stateReducer = (state, action) => {
    if(state === undefined) {
        return {
            count: 0
        };
    }

    return state;
}

// Adding lifecycle hooks
const enhance = lifecycle({
    componentDidMount() {
        console.log('I run when the component is mounted');
    },
    componentWillUnmount() {
        console.log('I run when the component will be unmounted');
    }
});

const component = createComponent(template, stateReducer);

// Enhance our component with it's lifecycle hooks
const enhancedComponent = enhance(component);

render(document.querySelector('#app'), enhancedComponent);
```

Now, when the component mounts we want to start increasing the count every 1 second.

First, we'll define our `INC` (increase) `action`:
```js
const increaseCounter = () => ({ type: 'INC' });
```

Components with a `reducer` have a `dispatch` property which can be used to dispatch `actions` to the reducer.

In our `componentDidMount()` hook we can `dispatch` our `increaseCounter()` action in a setInterval:
```js
componentDidMount() {
    this.intervalID = setInterval(
        () => this.dispatch(increaseCounter()),
        1000
    );
}
```

In applications with many components, it's very important to free up resources taken by the components when they are destroyed. So, let's not forget to clear the interval when the component unmounts!
```js
componentWillUnmount() {
    clearInterval(this.intervalID);
}
```


### **Updating the component's state**

In the `reducer`, when we receive an `action` of type `INC` we need to returm our components new state with the updated value.

```js
const stateReducer = (state, action) => {
    if(state === undefined) {
        return {
            count: 0
        };
    }

    if(action.type === 'INC') {
        // We create a new object from the original state!
        // If we changed the previous state object instead,
        // its reference would stay the same, thus,
        // the component will not be re-rendered!
        return {
            ...state,
            count: state.count + 1
        };
    }

    return state;
}
```

### **Rendering the working counter component**

Notice how we can refactor the code by:
- Extracting the intialState
- Extracting action type constants
- Using a switch statement in the reducer


`Counter.js`
```js
import { createComponent, render } from 'melody-component';
import { lifecycle } from 'melody-hoc';
import template from './template.twig';

// Initial counter state
const initialState = {
    count: 0
};

// Action types
const INC = 'INC';

// Actions
const increaseCounter = () => ({ type: INC });

// Use default values to define the initial state
const stateReducer = (state = initialState, action) => {
    
    // Use a switch case to easily handle other actions in the future
    switch(action.type) {
        case INC: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        // For any other actions, return the current state to prevent a re-render
        default:
            return state;
    }
}

const withIncreasingCounter = lifecycle({
    componentDidMount() {
        // Start our interval ticker
        this.intervalID = setInterval(
            // dispatch the increaseCounter action
            () => this.dispatch(increaseCounter()),
            1000 // every 1000 ms 
        );
    },
    componentWillUnmount() {
        // Clear the ticker on unmount
        clearInterval(this.intervalID);
    }
});

const component = createComponent(template, stateReducer);

const enhancedComponent = withIncreasingCounter(component);

render(document.querySelector('#app'), enhancedComponent);
```
