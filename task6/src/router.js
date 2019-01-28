import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import List from "./list";
import Header from "./header";
import Add_record from "./addRecord/addRecord";
import Edit_user from "./editUser.js/editUser";

const routing = (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/list" component={List} />
        <Route exact path = '/list/:id' component = {Edit_user} />
          
        <Route path="/list/new" component={Add_record} />
      </Switch>
    </div>
  </Router>
);


export default routing;