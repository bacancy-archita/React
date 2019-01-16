import React, { Component } from 'react';
import './../App.css';


class Header extends Component {
  render() {
    return (

      <div className="header">
          <p className="links">Home</p>
          <p className="links">About Us</p>
          <p className="links">Contact</p>
          <p className="links">Feedback</p>
      </div>
    );
  }
}



export default Header;
