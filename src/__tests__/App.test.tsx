import * as React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

describe('App', () => {
  it('should expect to render the component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
