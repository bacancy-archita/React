import React, { Component } from 'react';


class Form2 extends Component {
    render() {
        return (
            <div className="form">
                <p>
                    <input type="text" placeholder="Enter Email" onChange = {e => {this.props.onChange(e)}}
                     className="inputs" id="email" /><br />
                </p>
                <p>
                    <input type="text" placeholder="Enter Password" onChange = {e => {this.props.onChange(e)}}
                       className="inputs" id="password" /><br />
                </p>
                <p>
                    <button id="button" onClick= {e => {this.props.onClick()}}>Submit</button>
                </p>
            </div>
        );
    }
}

export default Form2;
