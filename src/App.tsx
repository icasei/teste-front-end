import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/global';
import Video from './pages/Video'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/watch/:videoid">
          <Video />
        </Route>
        <Route path="/">
          <Home/>
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
