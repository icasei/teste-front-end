import * as React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

test('App render ', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
