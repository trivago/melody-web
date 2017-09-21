# Styles

Similar to HTML [attributes](attributes.md) or HTML [classes](classes.md), Melody supports the usual HTML method of adding inline styles to a HTML element via the `styles` attribute:

{% raw %}
```twig
<div style="left: 0; top: 4px">Lorem Ipsum</div>
```
{% endraw %}

In general usage of inline styles on element ***is not a best practice***; but, in rare cases it can not be avoided (eg. complex animations).

## Conditional Styles

Melody also supports the ternary `if` operator Twig method of adding inline declarations that are dependent on some other variable:

{% raw %}
```twig
<div style="{{ leftPosition ? 'left:' ~ leftPosition ~ 'px' }}">Lorem Ipsum</div>
```
{% endraw %}

This works ok when you have only one or two conditional styles, but if you have a number of them (usually in complex animations or tooltips), it can begin to look a bit cramped and ugly.

To help combat this, Melody also has the `styles` filter which is similar to, and works well with, the `attrs` or a `classes` filter:

{% raw %}
```twig
<div style="{{ {
    'border': border,
    'top': top,
    'left': left
} | styles }}">Lorem Ipsum</div>
```
{% endraw %}

Example of combined usage with `attrs` and `classes` filters:

{% raw %}
```twig
<div {{ {
    class: {
        base: 'foo',
        'foo--active': active,
        'foo--disabled': disabled,
    } | classes,
    style: {
        'border': border,
        'top': top,
        'left': left
    } | styles
} | attrs }}>Lorem Ipsum</div>
```
{% endraw %}

## Styles with Dynamic Names

If you are using the `styles` filter and want to add styles whose names are wholly or partially contained within a variable, then you need to do the following:

{% raw %}
```twig
<div style="{{ {
   'color': color,
   ('border-' ~ borderSide): border,
   (position): positionValue
} | styles }}">Lorem Ipsum</div>
```
{% endraw %}
