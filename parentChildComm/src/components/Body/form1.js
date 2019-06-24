import React, { Component } from 'react';

class Form1 extends Component {
  render() {
    return (
        <div className="form">
        <p>
            <input type="text" placeholder="Enter Name" className="inputs"
             onChange= {e => {this.props.onChange(e)}}  id="name" /><br />
        </p>
        <p>
            <input type="text" placeholder="Enter Email" className="inputs"
             onChange= {e => {this.props.onChange(e)}} id="email" /><br />
        </p>
        <p>
            <input type="password" placeholder="Enter Password" className="inputs"
            onChange= {e => {this.props.onChange(e)}} id="password" /><br />
        </p>
        <p>
            <input type="checkbox"  />
        </p>
        <p>
            <button id="button" onClick={e => this.props.onClick(e)}>Submit</button><br />
        </p>

    </div>
    );
  }
}

export default Form1;
