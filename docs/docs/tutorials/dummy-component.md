# Melody component

In this tutorial we are going to create one simple Melody component that uses dummy data; and we are going to attach basic functionality to it.

For a start we would have to come up with very creative name; and that is why we are going to call this component `my-melody-component-v2-new-final`. :-) 

## Directory structure

Obviously our new `my-melody-component-v2-new-final` component would require a directory and a basic file structure. As most of our components (such as this one) would require some markup, functionality and styles; we are going to need template (TWIG), Styles (SCSS) and JavaScript (JS) files.

Let's get going and create a directory and empty files as in the example below:

```
my-melody-component-v2-new-final/
  - index.js
  - index.css
  - index.melody.twig
``` 

## A single button component

As a very simple example we would like to place a single button as a component and render it in another Melody component.

Let's start by adding a button into the template file.

```twig
{# index.melody.twig #}
<button type="button" class="btn">My button</button>
```

Writing only markup is not sufficient for Melody component to get rendered after mounting; we would also have to create and export this component in JavaScript file.

At this moment we will import `createComponent ` function from `melody-component` <sup>(1)</sup> package and import template file <sup>(2)</sup>. Melody component expects default export to be a component itself; so we'll export <sup>(3)</sup> `createComponent(template)`.

```js
// index.js
import {createComponent} from 'melody-component'; // 1
import template from './index.melody.twig'; // 2
export default createComponent(template); // 3
```

Our component is ready for testing. It is time to mount it in another component and we can do it using Melody `mount` tag.

```twig
{# another melody component markup #}
{% mount "./path/to/my-melody-component-v2-new-final" as 'my-key' %}
```

## Adding styles

Some components require specific styles and that is why our `my-melody-component-v2-new-final` should also have some. So now we are going to do something that every designer and UI developer likes to do the most: we will add a new type of button. ***Rainbow animated button.*** :-)

```css
/* index.css */

.btn--animated { /* New modifier */
  color: white;
  font-weight: bold;
  font-size: 16px;
  background-image: linear-gradient(180deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1000% 1000%;
  animation: btn-ani 1s ease infinite;
}

@keyframes btn-ani { 
  0% {
    background-position: 0 80%
  }
  50% {
    background-position: 100% 20%
  }
  100% {
    background-position: 0 80%
  }
}
```

Importing this styles to our component is as easy as adding `import './index.css';` into our `index.js` file. If you have setup [Webpack](https://webpack.github.io/), you can now import your CSS as part of your components JavaScript; CSS file will parsed and appended to the DOM.

```js
// index.js
import {createComponent} from 'melody-component';
import template from './index.melody.twig';
import './index.css'; // <--- import component specific styles
export default createComponent(template);
```

Let's not forget to add `btn--animated` modifier class to our markup.

```twig
{# index.melody.twig #}
<button type="button" class="btn btn--animated">My button</button>
```

Our button is now all nice and colorful. :-)

# Adding dummy data

Most components are more complex than a button; that is why we would like to add some "dynamic" values such as hotel name, accommodation type and reviews into our template.

We can create a new file named `dummy-data.js` to our component directory and add dummy data to it like so:

```js
// dummy-data.js
export default {
  "name": "Tryp Times Square",
  "partnerName": "Booking.com",
  "accommodationType": "Hotel",
  "bestPrice": "\u00a3158",
  "showOnlyAvailable": true,
  "reviews": [{
      "available": true,
      "type": "Location",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "available": true,
      "type": "Breakfast",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "available": false,
      "type": "Unknown",
      "desc": ""
    }, {
      "available": true,
      "type": "Pool",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }]
};
```
New directory structure should look like this:

```
my-melody-component-v2-new-final/
  - dummy-data.js <--- our component's dummy data
  - index.js
  - index.css
  - index.melody.twig
``` 

Now we need to import this data in our main component JS file. 
At this stage we have data (or a state), we're ready to write a reducer for it (see below). The reducer is a pure function that takes the previous state and an action, and returns the next state. 

As we already have and we will only use this dummy data, we can pass it as an initial state to the reducer.

```js
// index.js
import {createComponent, RECEIVE_PROPS} from 'melody-component';
import template from './index.melody.twig';
import './index.css';

import initialState from './dummy-data'; // <--- import our dummy data

function stateReducer(
  state = initialState, // <--- state, setting initial state
  {type, payload} // <--- action
) {
  switch (type) {
    case RECEIVE_PROPS: { // <--- RECEIVE_PROPS action (mounting component)
      return {
        ...state,
        ...payload
      };
    }
    default: {
      return state;
    }
  }
}

export default createComponent(template, stateReducer);
```

Since we have this data provided to the view, it's time to modify the template and checkout the output.

```twig
{# index.melody.twig #}
<div>
  <h1>{{ name }}</h1>
  <p>{{ partnerName }} | {{ accommodationType }} | {{ bestPrice }}</button>
  
  {% for review in reviews %}
    <section key="{{ loop.index }}"> {# <-- key attribute #}
      <h3>{{ review.type }}</h3>
      <p>{{ review.desc }}</p>
    </section>
  {% endfor %}
</div>
```
Note: *The [key attribute](../twig/the-key-attribute.md) is added to the `section` element in order to identify the correct element within a [loop](../twig/loops.md) when it comes to removal or an update of the element. Every key's value needs to be unique within the scope if it's parent element (in this case the root `div` element).

You may noticed the `showOnlyAvailable` parameter in the dummy data. We would like to use this parameter to check whether to show only reviews that are available.

Let's modify the template again:

```twig
{# index.melody.twig #}
<div>
  <h1>{{ name }}</h1>
  <p>{{ partnerName }} | {{ accommodationType }} | {{ bestPrice }}</p>
  
  {% for review in reviews if showOnlyAvailable and review.available %}
    <section key="{{ loop.index }}">
      <h3>{{ review.type }}</h3>
      <p>{{ review.desc }}</p>
    </section>
  {% endfor %}
</div>
```

At this stage we're displaying only available reviews and we would like to toggle this functionality (display all or display only available). Let us modify the template again by adding `or` condition and button that will trigger this functionality.
[The ref attribute](../twig/the-ref-attribute.md) will give access to this element within the component.

```twig
{# index.melody.twig #}
<div>
  <h1>{{ name }}</h1>
  <p>{{ partnerName }} | {{ accommodationType }} | {{ bestPrice }}</p>
  <button type="button" class="btn btn--animated" ref="toggle">Toggle available</button> {# <-- toggle "show only available" state of the component #}
    
  {# Loop reviews and show only available if "showOnlyAvailable" is on, otherwise show all "not showOnlyAvailable" #}
  {% for review in reviews if showOnlyAvailable and review.available or not showOnlyAvailable %}
    <section key="{{ loop.index }}">
      <h3>{{ review.type }}</h3>
      <p>{{ review.desc }}</p>
    </section>
  {% endfor %}
</div>
```

In order to attach the event and dispatch the `TOGGLE` state action we need to import `bindEvents` from Melody [higher order components](../hoc/hoc.md) and dispatch the `TOGGLE` action. Time to modify JavaScript file.

```js
// index.js
import {createComponent, RECEIVE_PROPS} from 'melody-component';
import {bindEvents} from 'melody-hoc'; // <--- Bind Event HOC
import template from './index.melody.twig';
import './index.css';

import initialState from './dummy-data'; 

function stateReducer(state = initialState, {type, payload}) {
  switch (type) {
    case RECEIVE_PROPS: {
      return {
        ...state,
        ...payload
      }
    }
    case 'TOGGLE': { // <--- add toggle case to reducer
      return {
        ...state,
        showOnlyAvailable: !state.showOnlyAvailable
      }
    }
    default: {
      return state;
    }
  }
}

const enhance = bindEvents({
    toggle: { // <--- dispatch toggle action <button ref="toggle" ...
        click() {
            this.dispatch({ 
                type: 'TOGGLE'
            })
        }
    }
});

export default enhance( // <--- enhance component with bindEvents HOC
  createComponent(template, stateReducer)
);
```

The `bindEvents` HOC let's you define event handlers for the referenced DOM nodes. The `click` event handler is bound to an intermediate object that exposes the same API like the component and thus allows us to use `this.props`, `this.state` or `this.dispatch`.



That is all, our `my-melody-component-v2-new-final` is ready to use now :-)
