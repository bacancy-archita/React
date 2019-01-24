import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './Recordlist.css';

class Recordlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            loading: false,
            currentPage: 1,
            pages: [],
            pageChange: false
        }
        this.pageNumber = this.pageNumber.bind(this);
        this.onClick = this.onClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    onClick(e) {
        this.setState({ currentPage: e.target.value, pageChange: true }, () => { this.fetchData() })
    }

    fetchData() {
        this.setState({ loading: true });
        axios.get('https://reqres.in/api/users?page=${this.state.currentPage}')
            .then(res => {
                return res;
            })
            .then(res => {
                console.log('res :', res);
                this.setState({ userList: res.data.data || [], loading: false, pages: res.data });
            })
            .catch(function (error) {
                alert("Oops! Something went wrong.");
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    pageNumber() {

        var obj = [];
        for (var i = 1; i <= this.state.pages.total_pages; i++) {
            obj.push(
                <div>
                    <div style={{ float: 'left', height: 30, width: 30, textAlign: 'center' }}>
                        {/* {/ <NavLink activeClassName='active' to={'/' + i} className='navlink'> {i}</NavLink> /} */}
                        <button className='btn' value={i} onClick={(e) => this.onClick(e)}>{i}</button>
                    </div>
                </div >
            )
        }
        return (obj);

    }

    render() {
        if (this.state.loading) {
            return (
                <div className="App">
                    <div className='loading'>
                        <b>Please wait while we are getting user detail...</b>
                    </div>
                </div>
            )
        }

        return (
            <div className="App">
                <div className='loading'>
                    <div>
                        <div class="mainTable bottomBorder leftBorder rightBorder ">
                            <div class="headerData topBorder headingBottom">
                                <div className="tableData rightBorder"> Firstname </div>
                                <div className="tableData rightBorder"> Lastname </div>
                                <div className="tableData rightBorder"> Avtar </div>
                                <div className="tableData"> Action </div>
                            </div>
                            {this.state.userList.map((u, i) => {
                                return <div key={i}>
                                    <div class="topBorder">
                                        <div className="tableData rightBorder"> {u.first_name} </div>
                                        <div className="tableData rightBorder"> {u.last_name} </div>
                                        <div className="tableData rightBorder"> <img src={u.avatar} alt="Profile" width="50px" height="50px" /> </div>
                                        <div className="tableData">
                                            <NavLink to='/edit' className='link1'>Edit</NavLink>
                                            |
<NavLink to='/delete' className='link1'>Delete</NavLink>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        {this.pageNumber()}
                    </div>
                </div>
            </div>
        )

    }
}
export default Recordlist;