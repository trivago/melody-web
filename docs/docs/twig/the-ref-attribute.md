# The `ref` attribute

The `ref` attribute can be used to export an element so that a component can gain access to it.

The `ref` attribute must **not** be filtered through the `attrs` filter.

The `ref` attribute is not visible on the rendered HTML.

## Example

{% raw %}
```twig
<button ref="arrow" type="button" class="btn--reset">
    <span class="icon-ic svg-arrow"><svg>...</svg></span>
    <span class="visuallyhidden">{{ title }}</span>
</button>
```
{% endraw %}

And within the JavaScript code, it can be accessed as such:

{% raw %}
```js
const enhance = lifecycle({
    componentDidMount() {
        this.clickHandler = (e) => {
            e.stopPropagation();
            const { itemId, direction } = this.getState();
            this.props.callToAction();
        };
        this.refs.arrow.addEventListener('click', this.clickHandler);
    },
    componentWillUnmount() {
        this.refs.arrow.removeEventListener('click', this.clickHandler);
        this.clickHandler = null;
    }
});
```
{% endraw %}
