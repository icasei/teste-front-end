import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import {
  Home
} from '../../Pages'

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </>
  )
}

export default Routes