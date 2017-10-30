# Melody Jest Transform

melody-jest-transform is the preprocessor for the twig templates for melody.

To use add the following to your package.json

```json
"jest": {
    "transform": {
        "^.+\\.twig$": "melody-jest-transform",
        "^.+\\.js$": "babel-jest"
    }
}
```

**NOTE:** If you use melody plugins or custom babel config you might want to
customize your transformer.

## Customizing the transformer

By default melody-jest-transform transforms your twig files only with core
extension. Then it transforms tries to find closest babel config. If you don't
have .babelrc file or a "babel" configuration on your package.json, you can
extend the transformer as shown below.

```js
// custom-twig-transformer.js

import { transformer } from 'melody-jest-transform';

// melody plugins
import icon from 'melody-orchestra-compat';
import { extension as CoreExtension } from 'melody-extension-core';

// babel config from webpack
import { babelConfig } from 'webpack.js'

// Your configuration

const customConfig = {
  plugins: [extension, icon],
  babel: babelConfig
}

// Don't change the name/signature of this function
export process(src, path) {
  return transformer(src, path, customConfig);
}

```

Then change your transform option for twig to this:

```json
"jest": {
    "transform": {
        "^.+\\.twig$": "/path/to/custom-twig-transformer.js",
        "^.+\\.js$": "babel-jest"
    }
}
```

## Transformer options

### `plugins`
`default : [CoreExtenions]`

This is your extenions to the twig compiler. By default it is only
`melody-extension-core`, if you add another extenion you will need to add core
extensions as well.


### `noBabel`
`default: false`

If you don't want to transform with babel set it to true

### `babel`
`default: .babelrc || babel entry on package.json`

This is given to the babel unless you didn't set `noBabel`. If `babel` or
`noBabel` not set at all, by default transformer tries to get babel config on
`package.json` or `.babelrc`.
