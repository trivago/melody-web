# Lifecycle

Melody Components have a lifecycle that you can tap into to enhance them.

## `componentDidInitialize()`

Called right after the initialization of the component. 

## `componentWillMount()`

Called during the initial rendering of the component, just before the
component receives its properties and is rendered.

## `componentDidMount()`

Called during the initial rendering of the component, just after the
component has been rendered.

## `componentWillUnmount()`

Called when a component is no longer used and should be implemented
to clean up any references accumulated throughout the components lifecycle.

For example, the default implementation will remove the `el` from the
component, making it easier for the garbage collector to remove it.

## `shouldComponentUpdate(nextProps, nextState): boolean`

Invoked for every render except the initial one. If it returns `false`,
the component will be skipped and won't be re-rendered. Instead, the
current rendering result is being used as is.

The default implementation will use reference equality to check if the state
has been changed and will only return `true` if `nextState !== this.state`.

If there has been any change to the components state, it is contained within
the `nextState` parameter while `this.state` always refers to the last
rendered state. The same is true for `nextProps` and `this.props`.

## `componentWillUpdate(nextProps, nextState)`

Called just before a component is rendered except for the initial rendering.
`nextProps` and `nextState` are the same as in `shouldComponentUpdate` and
the `this.props` and `this.state` properties have not been updated yet.

## `componentDidUpdate(prevProps, prevState)`

Called just after a component has been rendered except for the initial
rendering. When this method is invoked, `this.state` and `this.props`
will have been updated to their current values and their previous
values are provided as `prevProps` and `prevState` to this method.
