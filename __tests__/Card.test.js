import React from 'react'
import { shallow } from 'enzyme'

import { Card } from '../src/Components'

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapshot()
  });

});