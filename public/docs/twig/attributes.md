# Attributes

Since Twig templates are HTML, you are encouraged to use semantic HTML when building your templates. Melody supports the addition of attributes in your Twig templates in the standard manner:

{% raw %}
```html
<input type="input" placeholder="Please enter your name">
```
{% endraw %}

## Dynamic HTML attributes

Melody also allows you to specify attributes that are fully dynamic, in the usual Twig way:

{% raw %}
```twig
<input type="input" placeholder="{{ placeholderText }}">
```
{% endraw %}

## Attributes with Dynamic Names

However, in order to specify attributes that have a _dynamic name_, you'll need to use the `attrs` filter:

{% raw %}
```twig
<input type="input" placeholder="{{ placeholderText }}"
{{ { ("data-" ~ dataAttrName): dataAttrValue } | attrs }}>
```
{% endraw %}

The `attrs` filter converts the given attribute map to a structure that can be picked up by the Melody compiler.

Multiple dynamically named attributes can also be added:
{% raw %}
```twig
<input type="text" placeholder="{{ placeholderText }}"
       {{ { 
          ("data-" ~ dataAttrName1): dataAttrValue1,
          ("data-" ~ dataAttrName2): dataAttrValue2 
} | attrs }}>
```
{% endraw %}

## Setting attribute values

To set an attribute to a specific value depending on some condition, you can do the following:
{% raw %}
```twig
<input type="text" placeholder="{{ placeholderText }}"
       {{ { 
          "role": addRole ? "textbox",
          "data-type": isName ? "name" : "email"
} | attrs }}>
```
{% endraw %}

## Adding existing attributes

If you already have an object that contains existing attributes that need to be additionally added to an element:

{% raw %}
```json
"dataVariables": {
   "data-test": "test-value1",
   "data-test2": "test-value""
}
```
{% endraw %}

You can do so, also via the `attrs` filter and Twig's [`merge` filter](http://twig.sensiolabs.org/doc/filters/merge.html):

{% raw %}
```twig
<input type="text" placeholder="{{ placeholderText }}"
{{
    {
        disabled: isDisabled
    }
    | merge(dataVariables | default({}))
    | attrs
}}>
```
{% endraw %}


## Conditional empty attributes

HTML has the concept of empty attributes whose pure presence has a meaning.

A prominent example of that is the `checked` attribute of an `input` field of type `checkbox`.

Melody has full support for those attributes, however, if you want to conditionally include them, you'll need to use the `attrs` filter again:

{% raw %}
```twig
<input type="checkbox" {{ { checked: isChecked } | attrs }}>
```
{% endraw %}

In this case, the `checked` attribute will only be added if the `isChecked` property is `true`.

## Attributes are NOT added to the rendered HTML when...

* its value is `false`
* its value is `undefined`
* its value is `null`
* it was previously specified on the element in question

