import React, { Component } from 'react';
import Sidebar from './sidebar';
import Content from './content';
import './creative.css';

class Creative extends Component {
    
  render() {
    return (
         <div className='creative'>
            <div  className='split left'>
              <Sidebar />
           </div>
           <div className='split right'>
             <Content/>
           </div>
         </div>
    );
  }
}

export default Creative;
