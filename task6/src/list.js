import React, { Component } from 'react';
import './App.css';
import Table from './table';

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div >
				<Table />
			</div>
		);
	}
}
export default List;
