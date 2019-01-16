import React, { Component } from 'react';

class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            validName: true,
            validEmail: true,
            validPass: true,
            msg:''
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePass = this.validatePass.bind(this);
    }
    onChange(e) {
        const id = e.target.id;
        const val = e.target.value;
        let obj = {};
        obj[id] = val;
        this.setState(obj)
    }
    validateName( ) {
        //debugger;
        let name = this.state.name;
        if (name == '' || name.length < 4) {
           this.setState({validName : false, msg: 'Name must contain atlest 4 letters.'});
        }
        else{
            this.setState({validName : true, msg : ''});
        }
    }
    validateEmail(){
        let email = this.state.email;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = re.test(email);
        if(result == true){
            this.setState({validEmail: true, msg : ''});
        }
        else{
            this.setState({validEmail: false, msg : 'Enter valid email'});
        }
    }
    validatePass(){
        debugger;
        let password = this.state.password;
        if(password == "" && password < 8){
            this.setState({validPass : false, msg : 'Password should be more than 8 characters.'});
        }
        else{
            this.setState({validPass : true, msg : ""});
        }
    }

    onClick() {
        const { email, name, password } = this.state;
        this.props.setValues({ email, name, password });
    }

    render() {
        debugger;
       const {validName, validPass, validEmail,msg} = this.state;
        return (
             <div className="form">
                <p>
                    <input type="text" placeholder="Enter Name" className="inputs"
                        onChange={this.onChange} onBlur={this.validateName}
                        style = {{borderColor : (validName ? '' : 'red')}} id="name" /><br />
                </p>
                <p>
                    <input type="text" placeholder="Enter Email" className="inputs"
                        onChange={this.onChange} onBlur={this.validateEmail} 
                        style={{borderColor : (validEmail ? '' : 'red')}} id="email" /><br />
                </p>
                <p>
                    <input type="password" placeholder="Enter Password" className="inputs"
                        onChange={this.onChange} onBlur={this.validatePass}
                        style = {{borderColor : (validPass ? '' : 'red')}} id="password" /><br />
                </p>
                <p>
                    <button id="button" onClick={this.onClick}>Submit</button><br />
                </p>
                <p>
                    {msg}
                </p>
            </div>

        );
    }
}

export default Form1;