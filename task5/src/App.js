import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './header';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
         <Header/>
         <Footer />
         <Router />
         <Body />

      </div>
    );
  }
}

export default AppSS;
