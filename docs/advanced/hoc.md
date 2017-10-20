# Higher order components (HOC)

Higher order components are **functions that take a Melody component** as an argument and **return a new enhanced Melody component**. Higher order components aim to encourage code that is **more reusable and modular** and  discourage giant, complicated components that do too many things.
You may already be using higher order components, when you integrate redux with Melody components. The `connect` function that you know from using redux is a higher order component as well.

## API

### `lifecycle`

`lifecycle` lets you define lifecycle hooks for a component.

### Signature
```
lifecycle(hooks: Object): (Component) => Component
```
* the `hooks` object lets you define lifecycle hooks.
* hooks are bound to an **isolated object** that offers the **same API** like components, so that you have access to `this.props`, `this.dispatch`, etc.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example
```javascript
import { lifecycle } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = lifecycle({
    componentDidMount()
        // lifecycle hooks are bound to an isolated object,
        // so that you can safely assign properties to `this`
        this.foo = 'bar' + this.props.foo;
    },
    componentWillMount() {
        this.foo = undefined;
    }
});

export default enhance(MyComponent);
```

### `bindEvents`

`bindEvents` lets you easily bind event handlers to events from **referenced elements**. Clean up is performed automatically.

### Signature
```
bindEvents(eventMap: Object): (Component) => Component
```
* `eventMap` object lets you define a set of event handlers for elements that you referenced within the template.
* event handlers are bound to an **isolated object** that offers the **same API** like components, so that you have access to `this.props`, `this.dispatch`, etc.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example

`twig`
```html
<div class="box">
    <input type="text" ref="{{ myInput }}"/>
    <button class="btn" ref="{{ myButton }}">Click me!</button>
</div>
```
`component`
```javascript
import { bindEvents } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = bindEvents({
    myButton: {
        click(event, component) {
            console.log('You clicked the button!');
        },
        mouseenter(event, component) {
            console.log('You hovered the button!')
        }
    },
    myInput: {
        keypress(event, component) {
            const { target } = event;
            const { value } = target;
            component.dispatch(update(value));
        }
    },
});

export default enhance(MyComponent);
```

### `mapProps`

Accepts a function that maps props to a new collection of props that are passed to the component.

### Signature
```
mapProps(propsMapper: (ownerProps: Object) => Object): (Component) => Component
```
* `propsMapper` is a function that receives the current props and returns a new collection of props
* **returns a function** that expects a Melody component and returns a enhanced version of the component.


### Example
```javascript
import { mapProps } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = mapProps(props => ({
    ...props,
    items: props.items.split(',')
}));

export default enhance(MyComponent);
```

### `defaultProps`

Specifies props to be passed by default to the component. If props are present, default props will be overridden.

### Signature
```
defaultProps(props): (Component) => Component
```

* `props` default props that are passed to the component.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example
```javascript
import { defaultProps } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = defaultProps({ title: 'No title specified' });

export default enhance(MyComponent);
```

### `withProps`

Specifies props to be passed by default to the component. If props are present, they will be overridden.

### Signature
```
withProps(props): (Component) => Component
```

* `props` props that are passed to the component.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example
```javascript
import { withProps } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = withProps({ pi: Math.PI });

export default enhance(MyComponent);
```

### `withRefs`

Specifies functions to be executed when **referenced elements** are added to the DOM, giving access to the DOM Element. Used by `bindEvents` under the hood.

### Signature
```
withRefs(
    (component: Component) => ({
        [refName: string]: (element: DOMNode) => Function
    })
): (Component) => Component
```
* `functionMap` object lets you define a set of functions for `ref`s elements that you referenced within the template.
* These functions receive the elements DOM node as an argument and have to return an object with a `unsubscribe` function for when the node is removed from the DOM.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example
```javascript
import { withRefs } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

let sectionElement;
const enhance = withRefs(component => ({
    section: el => {
        sectionElement = el;
        return {
            unsubscribe() {
                sectionElement = el;
            }
        };
    }
});

export default enhance(MyComponent);
```
```html
<div>
    <section ref="{{ section }}">
        <p>Hello</p>
    </section>
</div>
```

### `withStore`

Specifies a redux store and passes two additional props to the base component: a state value, and a function to dispatch actions.
You'll likely want to use this state updater along with `withHandlers` to create specific updater functions.
When props are given the the component the `RECEIVE_PROPS` action will be called with the props as its `payload`.

### Signature
```
withStore(
    storeFactory : Function => store : ReduxStore,
    stateName = 'state' : string,
    dispatchName = 'dispatch' : string,
) : (Component) => Component
```
* `storeFactory` is a function that returns a redux store.
* `stateName` and `dispatchName` can be renamed and are given as props to the base component.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example
```javascript
import { withStore } from 'melody-hoc';
import { createComponent } from 'melody-component';
import { createStore } from 'redux';
import template from './template.twig';

const MyComponent = createComponent(template);

const reducer = (state, action) =>
    action.type === 'INC' ? state + 1 : state;

const enhance = compose(
    withStore(() => createStore(reducer, 0)),
    withHandlers({
        onClick: props => event => {
            console.log('state', props.state);
            props.dispatch({type: 'INC'});
        }
    })
);

export default enhance(MyComponent);
```
```html
<div>
    <div>{{ state }}</div>
    <button onclick="{{ onClick }}">Increment</button>
</nav>
```

### `withHandlers`

Takes an object map of handler creators. These are higher-order functions that accept a set of props and return a function handler:
This allows the handler to access the current props via closure, without needing to change its signature.

### Signature
```
withHandlers(
  handlerCreators: {
    [handlerName: string]: (props: Object) => Function
  }
) : (Component) => Component
```
* `handlersCreators` object lets you define a set of functions for `ref`s elements that you referenced within the template.
* These functions receive the elements DOM node as an argument and have to return an object with a `unsubscribe` function for when the node is removed from the DOM.
* **returns a function** that expects a Melody component and returns a enhanced version of the component.

### Example
```javascript
import { withHandlers } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = withHandlers({
    onClick: props => event => {
        console.log('Clicked', event.target);
    }
});

export default enhance(MyComponent);
```
```html
<nav>
    <a onclick="{{ onClick }}">Home</a>
    <a onclick="{{ onClick }}">News</a>
</nav>
```


### Utility functions

### `compose`

Use to compose multiple higher-order components into a single higher-order component.

### Signature
```
compose(...functions: Array<Function>): Function
```

### Example

```javascript
import { defaultProps, lifecycle, bindEvents, compose } from 'melody-hoc';
import { createComponent } from 'melody-component';
import template from './template.twig';

const MyComponent = createComponent(template);

const enhance = compose(
    defaultProps({ title: 'No title specified' }),
    lifecycle({
        componentDidMount() {
            console.log('My component did mount with title', this.props.title);
        }
    }),
    bindEvents({
        myTitle: {
            click() {
                console.log('You clicked the title:', this.props.title);
            }
        }
    }),
);

export default enhance(MyComponent);
```
