import React, { Component } from 'react';
import './App.css';

class Button extends Component{
    
render(){
    let page = [];
    for(let i = 1; i <= this.props.getPage; i++){
      page.push(
          <button value={i} onClick ={e=>this.props.onClick(e)}>
          {i}</button>
      );
    }
    return(
        <div>{page}</div>
        );    
    } 
}
export default Button;
