# Styles

Similar to HTML [attributes](attributes) or HTML [classes](classes), Melody supports the usual HTML method of adding inline styles to a HTML element via the `styles` attribute:
```html
<div style="left: 0; top: 4px">Lorem Ipsum</div>
```
In general usage of inline styles on element _is not a best practice_; but, in rare cases it can not be avoided (eg. complex animations).

## Conditional Styles
Melody also supports the ternary `if` operator Twig method of adding inline declarations that are dependent on some other variable:
```html
<div style="{{ leftPosition ? 'left:' ~ leftPosition ~ 'px' }}">Lorem Ipsum</div>
```
This works ok when you have only one or two conditional styles, but if you have a number of them (usually in complex animations or tooltips), it can begin to look a bit cramped and ugly.

To help combat this, Melody also has the `styles` filter which is similar to, and works well with, the `attrs` or a `classes` filter:
```html
<div style="{{ {
    'border': border,
    'top': top,
    'left': left
} | styles }}">Lorem Ipsum</div>
```

Example of combined usage with `attrs` and `classes` filters:
```html
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

## Styles with Dynamic Names
If you are using the `styles` filter and want to add styles whose names are wholly or partially contained within a variable, then you need to do the following:

```html
<div style="{{ {
   'color': color,
   ('border-' ~ borderSide): border,
   (position): positionValue
} | styles }}">Lorem Ipsum</div>
```
