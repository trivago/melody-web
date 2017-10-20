# Mixins

The concept of a Mixin is nothing new. We've been using them as part
of `trv-harmony` for a while now and most programming languages support
them natively under the same name or as `Traits`.

In Melody, a Mixin is a capability that can be added to components.
There are many potential use cases, such as tapping into the
[Lifecycle hooks](./lifecycle.md) of a component to register event
handlers and dispatch actions.

A Mixin can be either a plain object whose properties are added to the
Component or it can be a function, which accepts the Components `prototype`
object and returns an object which is then added to the `prototype`.
This allows us to define mixins which alter the behaviour of a component
instead of overriding it as a simple object would do.

## Example: Handling events

Let us assume that, for some reason, you don't want to use `ref` to specify
and access the actual elements that you're interested in and that instead
you would prefer to add your event handlers using jQuery and event delegation
(there is really no need to do it but it is your choice, after all).

```js
import {createComponent} from 'trv-melody';
import stateReducer from './reducers';
import template from './template.twig';

const delegateEventSplitter = /^(\S+)\s*(.*)$/;
const EventDelegationMixin = function(proto) {
    // save the original implementation
    const componentDidMount = proto.componentDidMount;
    return {
        componentDidMount() {
            // first: call the original implementation
            componentDidMount.call(this);
            // second: our event delegation logic
            if(this.events) {
                const $el = $(this.el);
                Object.keys(this.events).forEach(key => {
                    const match = key.match(delegateEventSplitter);
                    const eventName = match[1], selector = match[2];
                    const eventToActionMapper = this.events[key];
                    // the actual event handler will transform the DOM event
                    // into an action and then dispatch it directly to
                    // the component
                    const handler = (event) => this.dispatch(eventToActionMapper(event));
                    if(selector === '') {
                        $el.on(eventName, handler);
                    } else {
                        $el.on(eventName, selector, handler);
                    }
                });
            }
        }
    };
};

const EventHandlers = {
    events: {
        'click .js_review': event => openSlideout('review'),
        'click .js_deals': event => openSlideout('deals'),
        'click .js_next_image': nextImage
    }
};

export default createComponent(
    template,
    stateReducer,
    EventDelegationMixin,
    EventHandlers
);
```

Given the above mixins, I could add their features to any component
that would benefit from them. It would even be possible to
dynamically add, remove or change the registered event handlers based
on the C-Test combination which is active for a user or something else.

## Composition > Inheritance

Mixins are, at their core, composable units of functionality that can be
added to any number of components. They stack on top of each other, allowing
you to mix and match their abilities based on your exact needs.

As such, Mixins are a great tool for achieving code reusability. This is
the reason why Melody encourages the usage of mixins instead of class/prototype
inheritance. They are more powerful and make code reuse the most natural
approach and they allow you to create your code is structured, logically
combined, units instead of random monoliths.

## Adding Mixins to an existing Component

Sometimes, you'll find that you need to enhance a pre-defined component.
Melody allows you to do so easily by simply invoking the Component and
providing the desired mixins as arguments to the call.

```
const MyComponentBase = createComponent(template);
export default MyComponentBase(MyEventHandlersMixin);
```

When using this feature for being able to skip the reducer, you can also
perform the invocation directly.

```
export default createComponent(template)(MyEventHandlersMixin);
```
