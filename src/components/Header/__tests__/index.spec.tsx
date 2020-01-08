import React from 'react';
import { mount } from 'enzyme';
import Header from '../index';

describe('General test', () => {
  it('should be mount without crashing', () => {
    const wrapper = mount(<Header />);
    wrapper
      .find('.ant-menu-item')
      .last()
      .simulate('click');
    expect(wrapper).toBeTruthy();
  });
  it('should be select the item on click', () => {
    const wrapper = mount(<Header />);
    const itemToSelect = wrapper
      .find('.ant-menu-item')
      .last()
      .text();
    wrapper
      .find('.ant-menu-item')
      .last()
      .simulate('click');
    expect(
      wrapper
        .find('.ant-menu-item-selected')
        .first()
        .text()
    ).toBe(itemToSelect);
  });
});
