import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import List from "./list";
import Header from "./header";
import User from "./user/user";

const routing = (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/list" component={List} />
        <Route exact path = '/list/:id' component = {User} />
        <Route path="/list/new" component={User} />
      </Switch>
    </div>
  </Router>
);


export default routing;