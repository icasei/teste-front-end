import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import {
  HomePage
} from '../../Pages'

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
        </Switch>
      </Router>
    </>
  )
}

export default Routes