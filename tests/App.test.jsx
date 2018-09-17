import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/components/App'
import {getVideos, videoDetail} from '../src/youtube/api'


jest.mock('react-dom');


it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot()
})

it('youtube get videos', () => {

})

it('youtube get video detail', () => {

})