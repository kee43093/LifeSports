import React, { Component } from 'react';
import axios from 'axios';

import './CreateUser.css';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  

  render() {
    return (
      <div className="user-container">
        <div className="form-container">
          <div className="form-header-container">
            <h2 className="form-header">Create User</h2>
          </div>
          <form onSubmit={this.onSubmit} className="form">
            <input type="text" required className="form-input" value={this.state.username} onChange={this.onChangeUsername} placeholder="Username" aria-label="Username" />
            <button type="submit" className="form-submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}