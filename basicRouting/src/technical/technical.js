import React, { Component } from 'react';
//import {Route} from 'react-router-dom';
import Topbar from './topbar';
import Content from './content';


class Technical extends Component {
  render() {
    return (
      <div>
          <div className='topbar'>
            <Topbar/>
          </div>
          <div>
            <Content/>
          </div>
      </div>
    );
  }
}
export default Technical;
