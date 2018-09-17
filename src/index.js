import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from 'components/App'
import store from 'store'

const Application = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

const root = document.getElementById('root')

ReactDOM.render(<Application />, root)