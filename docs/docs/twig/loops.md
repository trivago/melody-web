# Loops

Melody supports the standard looping mechanism of Twig. But there are some other things that are worth knowning.

## The `key` to a fast loop

When using a loop, Melody is no longer able to avoid DOM mutations unless you specify a `key` attribute.
```html
<ul>
{% for person in people %}    
   <li key="{{ person.id }}">{{ person.name }}</li>
{% endfor %}
</ul>
```
Supplying the `key` attribute will allow Melody to recognise removed, moved, and replaced elements and perform a minimal amount of changes if necessary. Without the `key`, it'd have to potentially mutate many more elements.

_**Important**_
The `key` attribute should **never** be filtered through the `attrs` filter. The `key` attribute is only used internally by Melody and its value does not even appear in the rendered HTML. Filtering it through `attrs` hides it from Melody, and it also causes it to be rendered as an attribute in the HTML (thus causing invalid HTML).