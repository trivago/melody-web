# `provide(store, Component): Component`

While you can just import your Redux store within a Component and use
it directly, it is often advisable to just use the `provide` wrapper to
inject a specific store into your component hierarchy.

```js
import ItemList from '../components/ItemList';
import {render} from 'trv-melody';
import {provide} from 'trv-melody/redux';
import {store} from './store';

const root = document.querySelector('.item-list');

render(root, provide(store, ItemList));
```

This would usually be done at the root level of your application to specify
the store that should be used throughout the rest of the application or module.

## Screencasts

In the following screencasts you can find an example of how to pass the store down
in different ways. The example is using React and `react-redux` but the
principle can be applied for `provide` of the Melody `trv-melody/redux` as well.

1. [Redux: Passing the Store Down Explicitly via Props](https://egghead.io/lessons/javascript-redux-passing-the-store-down-explicitly-via-props)
2. [Redux: Passing the Store Down Implicitly via Context](https://egghead.io/lessons/javascript-redux-passing-the-store-down-implicitly-via-context)
3. [Redux: Passing the Store Down with <Provider> from React Redux](https://egghead.io/lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux)
