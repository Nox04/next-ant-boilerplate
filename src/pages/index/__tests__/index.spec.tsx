import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../index';

test('Hello World', () => {
  const wrapper = mount(<HomePage />);
  expect(wrapper).toBeTruthy();
});
