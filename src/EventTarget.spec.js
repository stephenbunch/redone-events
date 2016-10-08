/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* global it expect */

import React from 'react';
import { mount } from 'enzyme';
import EventTarget from './EventTarget';

it('should render a div by default', () => {
  const App = () => <EventTarget />;
  const wrapper = mount(<App />);
  expect(wrapper.html()).toBe('<div></div>');
  wrapper.unmount();
});

it('should render multiple children', () => {
  const App = () =>
    <EventTarget>
      <span>hello</span>
      <span>world</span>
    </EventTarget>;
  const wrapper = mount(<App />);
  expect(wrapper.html()).toBe('<div><span>hello</span><span>world</span></div>');
  wrapper.unmount();
});

it('should pass through attributes', () => {
  const App = () => <EventTarget className="foo" data-foo="bar" />;
  const wrapper = mount(<App />);
  expect(wrapper.html()).toBe('<div class="foo" data-foo="bar"></div>');
  wrapper.unmount();
});

it('should support rendering a custom component', () => {
  const Component = () => <input />;
  const App = () => <EventTarget component={Component} />;
  const wrapper = mount(<App />);
  expect(wrapper.html()).toBe('<input>');
  wrapper.unmount();
});

it('should support rendering a custom element type', () => {
  const Input = () => <EventTarget component="input" />;
  const wrapper = mount(<Input />);
  expect(wrapper.html()).toBe('<input>');
  wrapper.unmount();
});
