import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Technical from './technical/technical'
import Creative from './creative/creative'
import App from './App'
import Header from './pages/header';
import Footer from './pages/footer';
import Notfound from './notfound';

const routing = (
    <Router>
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/technical" component={Technical} />
            <Route path="/creative" component={Creative} />
            <Route component={Notfound}/>
        </Switch>
        <Footer />
        </div>
    </Router>
  )

export default routing;