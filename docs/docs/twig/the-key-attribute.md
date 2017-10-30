# The `key` attribute

The `key` attribute a unique identifier within a [loop](loops.md) and is used by Melody to make the minimum changes possible within the loop, where possible.

The `key` attribute must **not** be filtered through the `attrs` filter.

The `key` attribute is not visible on the rendered HTML.

## Example

{% raw %}
```twig
<ul>
{% for item in items %}
    <li key="{{ item.id }}" class="item">
        <img src="{{ item.src }}" alt="{{ item.alt }}" class="image" />
        <section class="details">
            <h3>{{ item.name }}</h3>
            <span class="latest-price">{{ item.latestPrice }}</span>
        </section>
    </li>
{% endfor %}
</ul>
```
{% endraw %}

The use of `key` here, on each item in a loop, helps Melody to decide which item to update if it needs to, so not all items would be re-rendered.