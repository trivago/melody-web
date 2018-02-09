# The `ref` attribute

The `ref` attribute can be used to export an element so that a component can gain access to it.

The `ref` attribute is not visible on the rendered HTML.

It is recommended that the `ref` attribute is filtered via the `attrs` filter so that it is not exposed to the HTML.

## Example
```html
<button {{ { ref: "arrow" } | attrs }} type="button" class="btn--reset">
    <span class="icon-ic svg-arrow"><svg>...</svg></span>
    <span class="visuallyhidden">{{ title }}</span>
</button>
```
And within the JavaScript code, it can be accessed with [High-Order Component](/documentation/advanced/hoc) `withRefs`:
```js
import { withRefs } from 'melody-hoc';
const enhance = withRefs(component => ({
    arrow: element => {
        component.clickHandler = (event) => {
            event.stopPropagation();
            const { itemId, direction } = component.getState();
            component.props.callToAction();
        };
        element.addEventListener('click', component.clickHandler);
        return {
            unsubscribe() {
                element.removeEventListener('click', component.clickHandler);
                component.clickHandler = null;
            }
        }
    }
}));
```
