# **Getting Started**

The easiest way to get started with Melody is to use [Create Melody App](http://github.com/trivago/create-melody-app). It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
```bash
yarn create melody-app my-app
```
```bash
cd my-app
yarn start
```
**Note:** This guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, we recommend refreshing your JavaScript knowledge so you can follow along more easily. Prior experience with other frameworks helps, but is not required.

## **Simple Melody Example**

Below is a simple example of rendering a melody app:

`hello.twig`
```twig
<div id="app">
    <h1>Hello {{ name }}</h1>
</div>
```
`index.js`
```js
import { createComponent, render } from 'melody-component';
import template from './hello.twig';

const documentRoot = document.getElementById('root');

const component = createComponent(template);

render(documentRoot, component, { name: 'Melody' });
```
It receives a `name` property with the string "Melody", then renders a header saying "Hello Melody" on the page.