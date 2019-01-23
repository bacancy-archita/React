import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recordList: [],
			loading: true
		}
		this.getRecord = this.getRecord.bind(this);
		this.button2 = this.button2.bind(this);

	}
	componentWillMount() {
		this.getRecord()
	}
	getRecord() {
		this.setState({ loading: true })

		axios.get('https://reqres.in/api/users?page=1')
			.then(response => {
				return response.data;
			})
			.then(response => {
				console.log(response);
				this.setState({ recordList: response.data || [], loading: false });
			})
			.catch(function (error) {
				alert("Oops! Something went wrong.");
			});

	}
	button2(){
		axios.get('https://reqres.in/api/users?page=2')
			.then(response => {
				return response.data;
			})
			.then(response => {
				console.log(response);
			})
			.catch( function (error){
				console.log(error);
				
			});
	}
	render() {
		return (
			<div >
				
				<h3>User CRUD Application</h3><br />
				<div>
					<a href='Record list'>Record list |</a>
					<a href='Record list'> Add Record</a>
				</div>
				{/* it will show loading until the data is being displayed */}
				{this.state.loading ? <p>Please wait...... </p> :
					<div>
						<form className='table'>
							<div>
								<div className='table-col'>Firstname</div>
								<div className='table-col'>Lastname</div>
								<div className='table-col'>Avatar</div>
								<div className='table-col'>Action</div>
							</div>
						</form>

						{this.state.recordList.map((u, i) => {
							return <div key={i} className='rows'>
								<div className='left'> {u.first_name}</div>
								<div className='right'> {u.last_name}</div>
								<div className='img'><img src={u.avatar} width="50px" height="50px"></img></div>
								<div className='cols'> {u.action}</div>
								<div className='edit'><a href=''>Edit|</a><a href=''>Delete</a></div>
							</div>
						})}
						<button>1</button>
						<button onClick = {this.props.button2}>2</button>
						<button>3</button>
						<button>4</button>
					</div>
				}
			
			</div>


		);

	}
}
export default List;
