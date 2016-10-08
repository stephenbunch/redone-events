import React from 'react';
import without from './without';

const {
  func,
  instanceOf,
  node,
  oneOfType,
  string,
} = React.PropTypes;

let currentEvent;

export default class EventTarget extends React.Component {
  static propTypes = {
    component: oneOfType([string, func]),
    children: node,
    onFocus: func,
    onBlur: func,
    onEnter: func,
    onLeave: func,
    // onPointerEnter: func,
    // onPointerLeave: func,
    // onPointerDown: func,
    // onPointerUp: func,
    // onPointerMove: func,
    // onScroll: func,
    // onDragStart: func,
    // onDrag: func,
    // onDragEnd: func,
    // onDropEnter: func,
    // onDrop: func,
    // onDropLeave: func,
  };

  static contextTypes = {
    __PARENT_EVENT_TARGET: instanceOf(EventTarget),
  };

  static childContextTypes = {
    __PARENT_EVENT_TARGET: instanceOf(EventTarget).isRequired,
  };

  get parent() {
    return this.context.__PARENT_EVENT_TARGET;
  }

  getChildContext() {
    return {
      __PARENT_EVENT_TARGET: this,
    };
  }

  onEnter(e) {
    if (this.parent) {
      this.parent.onEnter(e);
    }
    if (this.props.onEnter) {
      this.props.onEnter(e);
    }
  }

  onLeave(e) {
    if (this.props.onLeave) {
      this.props.onLeave(e);
    }
    if (this.parent) {
      this.parent.onLeave(e);
    }
  }

  onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  onElementFocus(e) {
    if (e.nativeEvent !== currentEvent) {
      currentEvent = e.nativeEvent;
      this.onEnter(e);
      this.onFocus(e);
    }
  }

  onElementBlur(e) {
    if (e.nativeEvent !== currentEvent) {
      currentEvent = e.nativeEvent;
      this.onBlur(e);
      this.onLeave(e);
    }
  }

  render() {
    const props = without(this.props, [
      'children',
      'component',
      'onFocus',
      'onBlur',
      'onEnter',
      'onLeave',
      // 'onPointerEnter',
      // 'onPointerLeave',
      // 'onPointerDown',
      // 'onPointerUp',
      // 'onPointerMove',
      // 'onScroll',
      // 'onDragStart',
      // 'onDrag',
      // 'onDragEnd',
      // 'onDropEnter',
      // 'onDrop',
      // 'onDropLeave',
    ]);
    return React.createElement(
      this.props.component || 'div',
      {
        ...props,
        onFocus: ::this.onElementFocus,
        onBlur: ::this.onElementBlur,
      },
      this.props.children
    );
  }
}
