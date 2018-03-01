# The `ref` attribute

The `ref` attribute can be used to export an element so that a component can gain access to it.

The `ref` attribute must **not** be filtered through the `attrs` filter.

The `ref` attribute is not visible on the rendered HTML.

The `ref` attribute in template should be represented via function from `withRefs` construction. In this case, if you want to render the template from server-side, you can make a fallback - `ref="{{ arrow | default }}"`

## Example
```html
<button ref="{{ arrow | default }}" type="button" class="btn--reset">
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
## Populating `refs` of component object
If you are using `withRefs` and want to access this NodeElement through `component.refs`, you should populate `refs` yourself.
```js
import { withRefs } from 'melody-hoc';
const enhance = withRefs(component => ({
    arrow: element => {
        element.addEventListener('click',  ... );
        ## component.refs.arrow = element;
        return {
            unsubscribe() {
                element.removeEventListener('click', ... );
                ## component.refs.arrow = null;
            }
        }
    }
}));
```
