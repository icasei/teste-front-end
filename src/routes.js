import React from 'react';
import Home from './pages/Home'
import Videos from './pages/Videos'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/video" component={Videos} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;