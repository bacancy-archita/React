import React, { Component } from 'react';
//import 'App.css'


class Login extends Component {
	constructor(props){
		//debugger;
		super(props);
		this.state= {
			email : '',
			password : ''
	}
	this.onChange = this.onChange.bind(this);
	this.onClick = this.onClick.bind(this);
}

	onChange(e){
		const id = e.target.id;
		const val = e.target.value;
		let obj = { }
		obj[id] = val
		this.setState(obj);
	}
	
	onClick(){
		//debugger;
		let data = this.props.values;
		
		console.log('signin', data);
		if(data.email==this.state.email || data.password==this.state.password ){
			alert("Done");
		}
		else{
				alert("Not Done")
			}
		}
  render() {
	  //debugger;
    return (
      <div className="form">
					<p>
						<input type="text" placeholder="Enter Email" className="inputs" onChange={this.onChange} id="email" ></input><br />
					</p>
					<p>
						<input type="password" placeholder="Enter Password" className="inputs" onChange={this.onChange}  id="password"></input><br />
					</p>
					<p>
						<button id="button" onClick={this.onClick}>Submit</button>
					</p>
		</div>
    );
  }
}
export default Login;
