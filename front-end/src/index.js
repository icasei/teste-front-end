import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import { BrowserRouter as Router }  from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);

