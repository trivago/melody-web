# Classes

Similar to HTML [attributes](attributes.md), Melody supports the usual HTML method of adding classes to a HTML element via the `class` attribute:

{% raw %}
```twig
<button class="btn btn--primary">Print</button>
```
{% endraw %}

## Conditional Classes

Melody also supports the ternary if operator Twig method of adding classes that are dependent on some other variable:

{% raw %}
```twig
<button class="btn btn--primary{{ isDisabled ? " btn--disabled" }}">Print</button>
```
{% endraw %}

This works ok when you have only one or two conditional classes, but if you have a number of them, it can begin to look a bit cramped and ugly.

To help combat this, Melody also has the `classes` filter which is similar to, and works well with, the `attrs` filter:

{% raw %}
```twig
<button class="{{ {
    base: 'btn btn--primary', 
    'btn--disabled': isDisabled
} | classes }}">Print</button>
```
{% endraw %}

With the `classes` filter, the keyword `base` is used to specify the class list that you always want to be added to the element, and other classes are then specified on the left, with the condition that adds them on the right.

`base` does not have to be used if no default classes are to be added:

{% raw %}
```twig
<button class="{{ {
    'btn--reset': isReset
    'btn--disabled': isDisabled
} | classes }}">Print</button>
```
{% endraw %}

The `classes` filter can also be used with default classes but without using `base`:

{% raw %}
```twig
<button class="btn btn--primary{{ { ' btn--disabled': isDisabled } | classes }}">Print</button>
```
{% endraw %}

As `class` is an attribute itself, it can also be added via the `attrs` filter, and `classes` also works with it:

{% raw %}
```twig
<button {{ {
   class: {
      base: 'btn btn--primary',
      'btn--disabled': isDisabled
   } | classes
} | attrs }}>Print</button>
```
{% endraw %}

You might only do this if you are already using the `attrs` filter and decide to filter all an element's attributes through it.

## Classes with Dynamic Names

If you are using the `classes` filter and want to add classes whose names are wholly or partially contained within a variable, then you need to do the following:

{% raw %}
```twig
<button class="{{
{   base: "btn",
   "btn--disabled": isDisabled,
   ("test-" ~ testNumber): addTestNumber,
   (classList): addClassList
} | classes }}">Print</button>
```
{% endraw %}