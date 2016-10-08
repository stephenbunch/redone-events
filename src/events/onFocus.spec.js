/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* global it expect */

import React from 'react';
import { mount } from 'enzyme';
import EventTarget from '../EventTarget';

it('should not bubble', () => {
  let result = '';
  const parentFocus = () => result += 'foo';
  const childFocus = () => result += 'bar';
  const App = () =>
    <EventTarget onFocus={parentFocus}>
      <EventTarget className="child" onFocus={childFocus} />
    </EventTarget>
  const wrapper = mount(<App />);
  wrapper.find('.child').simulate('focus');
  expect(result).toBe('bar');
  wrapper.unmount();
});
