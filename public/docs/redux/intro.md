# Redux Integration

Melody takes away a lot of complexity that comes with efficient rendering.
It encourages writing reusable and testable code by employing composition
over inheritance.

[Redux](http://redux.js.org) is a state handling framework that uses many
of the same principles. In fact, Melody *Reducers* are essentially identical
to the *Reducers* used by Redux. The same can be said about *Actions* in
both frameworks.

Just like Melody, Redux encourages the use of immutable state, which allows
Melody to automatically optimize rendering for you.

Thus, it makes perfect sense to encourage the use of Redux for maintaining
your application state when using Melody for rendering it.

While Redux has been marketed for usage with React, we believe Melody is
an even better fit for it.

## `trv-melody/redux`

Because of this, Melody comes with built-in (optional) Redux integration
which you can use by importing the [provide](./provide.md) and [connect](./connect.md)
component wrapper functions from `trv-melody/redux`.

The provided API is modeled closely after `react-redux` which integrates
Redux with the React framework. Most of the principles explained in the
[Usage with React](http://redux.js.org/docs/basics/UsageWithReact.html)
part of the Redux documentation also applies to using Redux with Melody.

## Presentational and Container Components

Just like with `react-redux` it also makes a lot of sense to separate
between **presentational** and **container** components with `trv-melody/redux`.

### Presentational Components

These components define how an application should look. They can have
custom state but ideally they're driven externally through *properties*
and invoke callbacks which would also be passed through their *properties*
when their state should change.

This approach makes them rather *dumb*. Their purpose is to simply render
the application state and to delegate things like clicking a button to
someone who knows what that should mean.

In an ideal world, every component should be presentational and you'd
use the features provided by `trv-melody/redux` to wrap such a presentational
component into a container component.

#### Screencasts

In the following screencasts you can find an example of how to separate
Presentational Components from a main Component. The example is using
React but the principle can be applied for Melody as well.
                                                            
1. [Redux: Extracting Presentational Components (Todo, TodoList)](https://egghead.io/lessons/javascript-redux-extracting-presentational-components-todo-todolist)
2. [Redux: Extracting Presentational Components (AddTodo, Footer, FilterLink)](https://egghead.io/lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink)

### Container Components

While presentational components should only care about rendering and event
delegation, a container component should not need to care about rendering
at all.

Instead, its sole purpose is to establish and maintain a connection to the
Redux store and to convert the data stored there into *properties* that can
be passed and used by a presentational component.

You can create such components by using the [provide](./provide.md) and [connect](./connect.md)
functions exported by `trv-melody/redux`.

#### Screencasts

In the following screencasts you can find an example of how to extract
Container Components. The example is using React but the principle can be
applied for Melody as well.

1. [Redux: Extracting Container Components (FilterLink)](https://egghead.io/lessons/javascript-redux-extracting-container-components-filterlink)
2. [Redux: Extracting Container Components (VisibleTodoList, AddTodo)](https://egghead.io/lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo)
