import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
        </div>
    </Router>
)


export default routing;