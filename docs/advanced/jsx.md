# Melody in Preact/Inferno

Melody's loader can compile twig templates into various outputs, `incremental-dom` and `jsx` are currently supported.

### Using [Neutrino](https://neutrino.js.org/):
```bash
yarn add --dev neutrino neutrino-preset-melody-jsx
```

### Using `melody-loader`  manually
Open your Preact/Inferno project and run:
```bash
yarn add --dev melody-loader
```
Edit your webpack config module rules for `.twig` files:
```js
module.exports = {
  entry: { /*...*/ },
  output: { /*...*/ },
  module: {
    rules: [
      /* Other rules for jsx, etc... */
      {
        test: /\.twig$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
              // For Preact
              ['transform-react-jsx', { 'pragma': 'h' }], 
              ['jsx-pragmatic', {
                  module: 'preact',
                  import: 'h',
                  export: 'h'
              }]
              // For Inferno:
              // ["inferno", { 'imports': true }]
            ]
          },
          {
            loader: 'melody-loader',
            options: {
              plugins: ['jsx']
            }
          }
        ]
      }
    ]
  }
};
```
**Babel plugins:**

Preact:
- [babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx) to transform jsx using `h` pragma for preact
- [babel-plugin-jsx-pragmatic](https://www.npmjs.com/package/babel-plugin-jsx-pragmatic) to add dynamic imports with correct pragma to twig files.
Inferno:
- [babel-plugin-inferno](https://www.npmjs.com/package/babel-plugin-inferno) to transform jsx and import Inferno in twig files with JSX.
## Code Example
`melody.twig`
```twig
<h2>Hey from {{name}}</h2>
```
`index.js`
```js
import { h, render } from 'preact';
import Melody from './melody.twig';

function Preact(props) {
  return (
    <div>
      <h1>Hello from {props.name}</h1>
      <Melody name="Melody" />
    </div>
  );
}

render(<Preact name="Preact" />, document.getElementById('root'));
```
## More information
This should be considered *Work in Progress* and currently only `twig` files can be imported, not complete Melody components.
For more information on webpack loaders please check the [webpack documentation](https://webpack.github.io/docs/loaders.html).
