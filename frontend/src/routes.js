import React from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

// o exact é para que seja exatamente o path, pq o React não compra chea se contem

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} /> 
            <Route path="/dashboard"component={Dashboard} />
            <Route path="/new"component={New} />
        </Switch>

        </BrowserRouter>

    );
}







