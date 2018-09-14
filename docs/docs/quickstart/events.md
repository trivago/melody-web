# Handling events

## **The `ref` attribute**

The `ref` attribute can be used to access an elements DOM node inside your component.

`template.twig`
```twig
<div id="app">
  <h1>{{ count }}</h1>
  <button ref="{{ incrementButton }}">Increment</button>
  <button ref="{{ decrementButton }}">Decrement</button>
</div>
```

## **Binding events**
Melody uses the `ref` attribute to bind events to elements in your components using the `bindEvents` higher order function. Events receive the components instance as its second argument giving you access to its `props`, `refs`, `state` and also `dispatch` actions to its reducer.

`buttons.js`
```js
import { createComponent, render } from 'melody-component';
import { bindEvents } from 'melody-hoc';
import template from './template.twig';

const withClickHandlers = bindEvents({
  incrementButton: {
    click(event, component) {
      // We have access to the native browser event
      event.preventDefault(); 
      console.log('Clicked the increment button');
    }
  },
  decrementButton: {
    click(event, component) {
      event.stopPropagation();
      console.log('Clicked the decrement button');
    }
  }
});

const component = createComponent(template);
const enhancedComponent = withClickHandlers(component);

render(document.querySelector('#app'), enhancedComponent);
```

## **Counter Example**
We can now use both `lifecyle` and `bindEvents` higher order functions/components to enhance our component.
We have also added an Action type and Action to decrease the counter and handled the action type in the reducer.
Since our enhancers (lifecyle/bindEvents) are just functions that receive a component, we can use `compose` to apply multiple enhancers to our component.

`template.twig`
```twig
<div id="app">
  <h1>{{ count }}</h1>
  <button ref="{{ incrementButton }}">Increment</button>
  <button ref="{{ decrementButton }}">Decrement</button>
</div>
```

`Counter.js`
```js
import { createComponent, render } from 'melody-component';
import { lifecycle, bindEvents, compose } from 'melody-hoc';
import template from './template.twig';

const initialState = { count: 0 };

// Action types
const INC = 'INC';
const DEC = 'DEC';

// Actions
const increaseCounter = () => ({ type: INC });
const decreaseCounter = () => ({ type: DEC });

// Reducer
const stateReducer = (state = initialState, action) => {
  switch(action.type) {
    case INC:
      return {
          ...state,
          count: state.count + 1
      };

    case DEC:
      return {
          ...state,
          count: state.count - 1
      };
  }
  return state;
}

// Make counter increase every second
const withIncreasingCounter = lifecycle({
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.dispatch(increaseCounter()),
      1000
    );
  },
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
});

// Add Events
const withClickHandlers = bindEvents({
  incrementButton: {
    click(event, {dispatch}) {
      dispatch(increaseCounter());
    }
  },
  decrementButton: {
    click(event, {dispatch}) {
      dispatch(decreaseCounter());
    }
  }
});

const component = createComponent(template, stateReducer);

// Compose Enhancer Functions
const enhancers = compose(withIncreasingCounter, withClickHandlers);

// Apply Enhancers
const enhancedComponent = enhancers(component);

render(document.querySelector('#app'), enhancedComponent);
```


