import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import './App.css';

class Button extends Component {

  render() {

    let page = [];
    for (let i = 1; i <= this.props.getPage; i++) {

      page.push(
        <button className='button' value={i} onClick={e => this.props.onClick(e)}>
          {i}</button>
      );

    }
    return (
      <div>{page}</div>
    );
  
  }

}

Button.propTypes = {
  getPage: PropTypes.number,
  onClick: PropTypes.func,
};

export default Button;
