import React, { Component } from 'react';
//import 'App.css'


class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            password : '',
            isValidName : true,
            isValidEmail:true,
            isValidPass:true,
            msgName:'',
            msgEmail:'',
            msgPass:'',
        };
        this.changeVal = this.changeVal.bind(this);
        this.emailValidate = this.emailValidate.bind(this);
        this.nameValidate = this.nameValidate.bind(this);
        this.passValidate = this.passValidate.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    nameValidate(e){
        //debugger;
        let name = e.target.value;
        if(name == "" || name.length < 4){
            this.setState({isValidName :false,msgName:'enter valid user name'});
            //return (!isName) ? alert("not ok") : alert("okay");
            //return (isValidName.isName) ;
        }
        else{
            this.setState({isValidName:true,msgName:''});
        }

    }
    emailValidate(e){
        //debugger;
        let email = e.target.value;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = re.test(email);
        if(isValid == false){
            this.setState({isValidEmail : false ,msgEmail : 'enter email'});
        }
        else{
            this.setState({isValidEmail : true ,msgEmail : ''})
        }
    }

    passValidate(e){
        //debugger;
        let pass = e.target.value;
        // let re = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        // let isPass = re.test(pass);
        if(pass == '' || pass.length < 8){
            this.setState({isValidPass:false, msgPass : 'enter password'})
        }
        else{
            this.setState({isValidPass:true, msgPass:''})
        }
    }
    
    changeVal(event){
       // debugger
        const id = event.target.id;
        const val = event.target.value;
        let obj = { };
        obj[id] = val;
        this.setState(obj);
        
    }
    
    onClick(){
        //debugger
        this.props.setValues(this.state.email,this.state.password);
    }


  render() {
      //debugger
      const {name, email,password,msgName,msgEmail,msgPass, isValidName,isValidEmail, isValidPass} = this.state;
    return (
        <div className="form">
            <p>
                <input type="text" placeholder="Enter Name" className="inputs" id="name"
                onChange={this.changeVal} onBlur={this.nameValidate} 
                style={{borderColor : (isValidName ? '' : 'red')}}></input><br />
            </p>
            <p>
                <input type="text" placeholder="Enter Email" className="inputs" id="email" 
                refs={input => {this.myInput = input}} onChange={this.changeVal} 
                onBlur={this.emailValidate} style={{borderColor : (isValidEmail ? '' : 'red')}} ></input><br /> 
            </p>
            <p>
                <input type="text" placeholder="Enter Password"  className="inputs" onChange={this.changeVal}
                onBlur= {this.passValidate} style={{borderColor : (isValidPass ? '' : 'red')}} id="password"></input><br />
            </p>
            <p>
                <button id="button" onClick={this.onClick}>Submit</button><br />
            </p>
            <p>
                Name : {name}<br />
                E-mail : {email}<br />
                Password :{password}
            </p>
            <span style={{color : 'red'}}>
                {msgName}<br/>
                {msgEmail}<br/>
                {msgPass}<br/>
            </span><br/>
           
            
        </div>
    );
  }
}
  export default SignUp;
