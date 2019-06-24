import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  
  render() {
    return (
      <div className='header'>
        <ul>
          <li className='header-li'>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li className='header-li'>
            <Link className='link' to='/creative'>Creative Blogs</Link>
          </li>
          <li className='header-li'>
            <Link className='link' to='/technical'>Technical Blogs</Link>  
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
