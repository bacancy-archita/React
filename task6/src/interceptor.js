import React, { Component } from 'react';

class Interceptor extends Component {
  getRecord() {
    this.setState({ fetching: true });
    axios.get(`https://reqres.in/api/users?page=${this.state.recordList.page}`)
      .then(response => {
        return response.data;
      })
      .then(response => {
        console.log(response);
        this.setState({ recordList: response || [], loading: false, fetching: false });
      })
      .catch(function (error) {
        alert("Oops! Something went wrong.");
      });
  }
}

export default Interceptor;
