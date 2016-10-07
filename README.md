# Redone Events

## Features
* Event bubbling based on component hierarchy rather than DOM hierarchy.
* Drag and drop events.
* Cross-platform events.
* Improved event system for building desktop-grade interfaces.
* `stopPropagation` "namespaces".

## Events
* onFocus
* onBlur
* onEnter
* onLeave
* onPointerEnter
* onPointerLeave
* onPointerDown
* onPointerUp
* onPointerMove
* onScroll
* onDragStart
* onDrag
* onDragEnd
* onDropEnter
* onDrop
* onDropLeave

```js
import React from 'react';
import { EventTarget } from 'redone-events';

class Autocomplete extends React.Component {
  render() {
    return (
      <EventTarget onEnter={e => console.log(e)}>
        hello
      </EventTarget>
    );
  }
}
```
