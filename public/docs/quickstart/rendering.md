# Rendering

## **Views**
Melody uses **twig** as template language for the views. It compiles your twig templates and emits an object which contains DOM patching instructions based on **incremental-dom**.

`template.twig`
```html
<div id="app">
  <h1>{{ message }}</h1>
</div>
```

## **Components**

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Creating a component brings some important capabilities to your views:
- State management
- Lifecycle methods
- Enhancement of your components using higher order functions/components

In order to create a simple component, call `createComponent` method with your template, then use the `render` method to render the component into a DOM node.
```js
import { createComponent, render } from 'melody-component';
import template from './template.twig';

const component = createComponent(template);

render(
  document.querySelector('#app'), // Render to DOM Node
  component, // Component to render
  { // Properties given to the component: (not required)
    message: 'Hello Melody!' 
  }
);
```

## **Composing Components**
You can compose your views using `twig` statements:
- `include` and `embed` will include/embed twig templates
- `mount` comes together with the melody twig compiler and will mount melody components

`button.twig`
```html
  <button style="color: {{ color }}">
    {{ text }}
  </button>
```

### **Use `include`/`embed` twig files directly**
`template.twig`
```html
<div id="app">
  <h1>{{ message }}</h1>
  {%include './button.twig' with {
    color: 'blue',
    text: 'Click Me!'
  } only %}
</div>
```
Notice that you can pass properties using the twig `with` statement.

### **Use `mount` statement to import components**
You can also use the `mount` statement within your components, using the same syntax as `embed`/`include`, the difference being that the view to be mounted should be a **melody component**.

Let's create a component from the template:

`button.js`
```js
import { createComponent } from 'melody-component';
import template from './button.twig';
export default createComponent(template);
```

Now use `mount` keyword in your twig templates to import melody components.

`template.twig`
```html
<div id="app">
  {{ message }}
  {% mount './button.js' with { 
    color: 'green',
    text: 'Increment' 
  } %}
</div>
```

### **Using loops and the `key` atrribute**
When using a `for` loop, Melody is no longer able to avoid DOM mutations unless you specify a `key` attribute. Supplying the `key` attribute will allow Melody to recognize removed, moved and replaced elements and perform a minimal amount of changes.

`buttons.twig`
```html
<div id="app">
  {% for button in counterButtons %}
    <button key="button{{loop.index0}}" style="color: {{ color }}">
      {{button.text}}
    </button>
  {% endfor %}
</div>
```

`buttons.js`
```js
import { createComponent, render } from 'melody-component';
import template from './buttons.twig';
const component = createComponent(template);

render(
  document.querySelector('#app'),
  component,
  {
    counterButtons: [
      { color: 'green', text: 'Increment' },
      { color: 'red', text: 'Decrement' }
    ]
  }
);
```

#### Notes:
- You can use `loop.index0` twig statement to get current index of element.
- The `key` attribute should never be filtered through `attrs` filter. The `key` attribute is only used internally by Melody and its value does not even appear in the rendered HTML.








