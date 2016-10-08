# Redone Events

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

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

class App extends React.Component {
  render() {
    return (
      <EventTarget onEnter={e => console.log(e)}>
        hello
      </EventTarget>
    );
  }
}
```

[npm-image]: https://img.shields.io/npm/v/redone-events.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/redone-events
[travis-image]: https://img.shields.io/travis/stephenbunch/redone-events.svg?style=flat-square
[travis-url]: https://travis-ci.org/stephenbunch/redone-events
[codecov-image]: https://img.shields.io/codecov/c/github/stephenbunch/redone-events.svg?style=flat-square
[codecov-url]: https://codecov.io/github/stephenbunch/redone-events
