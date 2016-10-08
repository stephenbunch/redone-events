/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* global it expect */

import React from 'react';
import { mount } from 'enzyme';
import EventTarget from '../EventTarget';

it('should fire on parent last', () => {
  let result = '';
  const parentLeave = () => result += 'foo';
  const childLeave = () => result += 'bar';
  const App = () =>
    <EventTarget onLeave={parentLeave}>
      <EventTarget className="child" onLeave={childLeave} />
    </EventTarget>;
  const wrapper = mount(<App />);
  wrapper.find('.child').simulate('blur');
  expect(result).toBe('barfoo');
  wrapper.unmount();
});
