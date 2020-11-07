import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Video from './pages/Video'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/watch/:videoid">
          <Video />
        </Route>
        <Route path="/">
          <Home/>
        </Route> 
      </Switch>
    </Router>
  )
}