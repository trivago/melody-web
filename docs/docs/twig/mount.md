# The mount statement

Melody components can compose other components using `mount` statement.

It is recommended to use `as` keyword with mount statements. It helps Melody to
track the component and make the minimum changes possible.

The `melody-compiler` would warn for the mount statements which are without `as`
keyword.

## Example
```html
  {% mount './item' as 'itemComponent' %}
```
**In Loops**:
```html
{% for item in items %}
  {% mount './item' as item.id %}
{% endfor %}
```