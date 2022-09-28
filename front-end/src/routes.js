import React from 'react';
import  App from './App';
import VideoDetail from './components/VideoDetail';
import {
    Switch,
    Route,
  } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <App/> 
      </Route>
      <Route path="/detalhes/:id">
      <VideoDetail />
      </Route>
    </Switch>
  )
}
export default Routes;