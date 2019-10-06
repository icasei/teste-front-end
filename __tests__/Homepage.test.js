import React from 'react'
import { shallow } from 'enzyme'

import HomePage from '../src'

describe('Testing HomePage Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  });

});