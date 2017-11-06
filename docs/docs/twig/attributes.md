# Attributes

Since html templates are HTML, you are encouraged to use semantic HTML when building your templates. Melody supports the addition of attributes in your html templates in the standard manner:
```html
<input type="input" placeholder="Please enter your name">
```

## Dynamic HTML attributes

Melody also allows you to specify attributes that are fully dynamic, in the usual html way:
```html
<input type="input" placeholder="{{ placeholderText }}">
```

## Attributes with Dynamic Names

However, in order to specify attributes that have a _dynamic name_, you'll need to use the `attrs` filter:
```html
<input type="input" placeholder="{{ placeholderText }}"
 {{ { ("data-" ~ dataAttrName): dataAttrValue } | attrs }}>
```
The `attrs` filter converts the given attribute map to a structure that can be picked up by the Melody compiler.

Multiple dynamically named attributes can also be added:
```html
<input type="text" placeholder="{{ placeholderText }}"
{{ { 
    ("data-" ~ dataAttrName1): dataAttrValue1,
    ("data-" ~ dataAttrName2): dataAttrValue2 
} | attrs }}>
```

## Setting attribute values

To set an attribute to a specific value depending on some condition, you can do the following:
```html
<input type="text" placeholder="{{ placeholderText }}"
{{ { 
    "role": addRole ? "textbox",
    "data-type": isName ? "name" : "email"
} | attrs }}>
```

## Adding existing attributes

If you already have an object that contains existing attributes that need to be additionally added to an element:
```json
"dataVariables": {
   "data-test": "test-value1",
   "data-test2": "test-value"
}
```
You can do so, also via the `attrs` filter and html's [`merge` filter](http://html.sensiolabs.org/doc/filters/merge.html):
```html
<input type="text" placeholder="{{ placeholderText }}"
{{
    {
        disabled: isDisabled
    }
    | merge(dataVariables | default({}))
    | attrs
}}>
```

## Conditional empty attributes

HTML has the concept of empty attributes whose pure presence has a meaning.

A prominent example of that is the `checked` attribute of an `input` field of type `checkbox`.

Melody has full support for those attributes, however, if you want to conditionally include them, you'll need to use the `attrs` filter again:
```html
<input type="checkbox" {{ { checked: isChecked } | attrs }}>
```
In this case, the `checked` attribute will only be added if the `isChecked` property is `true`.

### Attributes are NOT added to the rendered HTML when...
* its value is `false`
* its value is `undefined`
* its value is `null`
* it was previously specified on the element in question

