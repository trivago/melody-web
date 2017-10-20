# Snapshot testing with melody

# `melody-jest-shutter`

Melody shutter is a utility for making snapshot testing with melody easier. It
accepts your melody component and actions as an array. Shutter takes snapshots
of the result for initial render and every action given.

```js
import { shutter } from 'melody-jest-shutter';
import { myComponent } from './component';
import { actions } from './actions';

shutter(myComponent,
    { name: 'Efe', age: 5 },
    [
        { action: action.conquerTheWorld },
        { action: action.conquerTheWorldWithBoundParams.bind(this, 'arguments', 1, 2, 3) },
        {
            action: actions.conquerTheWorldWithParams,
            args: ['string', 1, 2, 3]
        },
        {
            action : {
                type: 'CONQUER_WITH_OBJECT_LITERAL',
                payload: { data: ["payload data", 1, 2, 3] }
            }
        }
    ]
);
```

## Options

By default shutter takes HTML and state snapshots of the component. You can
change this behavior by passing an option.

```js
shutter(myComponent, props, actionsArray, {
    state: false
});
```

### Twig templates

If you have twig templates imported in your tests, you should add
`melody-jest-transform` to compile them beforehands.

On your package.json

```json
"jest": {
    "transform": {
        "^.+\\.twig$": "melody-jest-transform",
        "^.+\\.js$": "babel-jest"
    }
}
```

**NOTE:** When transform option specified, jest does not automatically transform
js files anymore. You should add it as shown above.
