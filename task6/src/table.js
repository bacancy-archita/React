import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Button from './button';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recordList: [],
			loading : false,
			currentPage : 1,
			pageChange : false

		}
		this.getRecord = this.getRecord.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	componentWillMount() {
		this.setState({ loading: true })
		this.getRecord();
	}
	getRecord() {
		

		axios.get(`https://reqres.in/api/users?page=${this.state.currentPage}`)
			.then(response => {
				return response.data;
			})
			.then(response => {
				console.log(response.data);
				this.setState({ recordList: response || [], loading: false });
				
			})
			.catch(function (error) {
				alert("Oops! Something went wrong.");
			});
	}
	onClick(e){
		this.setState({currentPage : e.target.value, pageChange: true}, () => {this.getRecord()})
	}
	render() {
		return (
			<div>
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
						{this.state.recordList.data.map((u, i) => {
							return <div key={i} className='rows'>
								<div className='left'> {u.first_name}</div>
								<div className='right'> {u.last_name}</div>
								<div className='img'><img src={u.avatar} width="50px" height="50px"></img></div>
								<div className='cols'> {u.action}</div>
								<div className='edit'><a href=''>Edit|</a><a href=''>Delete</a></div>
							</div>
						})}
						<Button 
							getPage = {this.state.recordList.total_pages}
							onClick = {this.onClick}
							pageNumber = {this.state.recordList.current_page}>
						</Button>
					</div>
				}
			</div>
		);
	}
}
export default Table;
