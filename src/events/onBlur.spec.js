/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* global it expect */

import React from 'react';
import { mount } from 'enzyme';
import EventTarget from '../EventTarget';

it('should not bubble', () => {
  let result = '';
  const parentBlur = () => result += 'foo';
  const childBlur = () => result += 'bar';
  const App = () =>
    <EventTarget onBlur={parentBlur}>
      <EventTarget className="child" onBlur={childBlur} />
    </EventTarget>
  const wrapper = mount(<App />);
  wrapper.find('.child').simulate('blur');
  expect(result).toBe('bar');
  wrapper.unmount();
});
