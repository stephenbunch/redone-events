/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* global it expect */

import React from 'react';
import { mount } from 'enzyme';
import EventTarget from '../EventTarget';

it('should fire on parent first', () => {
  let result = '';
  const parentEnter = () => result += 'foo';
  const childEnter = () => result += 'bar';
  const App = () =>
    <EventTarget onEnter={parentEnter}>
      <EventTarget className="child" onEnter={childEnter} />
    </EventTarget>
  const wrapper = mount(<App />);
  wrapper.find('.child').simulate('focus');
  expect(result).toBe('foobar');
  wrapper.unmount();
});
