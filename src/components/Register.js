import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';

class Register extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      registered: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.addNewUserToDatabase = this. addNewUserToDatabase.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  addNewUserToDatabase(e) {
    e.preventDefault();
    fetch('/user/newUser',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
    });
    this.setState({registered: true});
  }


  render() {
    if(this.state.registered) {
      return(
        <div>
          <br/>
          <br/>
          <br/>
          <h1>Welcome {this.state.name}</h1>
        </div>
      );
    }
    return (
      <div>
        <form>
          <br/>
          <br/>
          <br/>
          <p>Name:</p>
          <input onChange={this.handleNameChange} type="text" name="name" value={this.state.name}/>
          <p>Email:</p>
          <input onChange={this.handleEmailChange} type="text" name="email" value={this.state.email}/>
          <p>Password:</p>
          <input onChange={this.handlePasswordChange} type="text" name="password" value={this.state.password}/>
          <p>Subscribe:</p>
          <button onClick={this.addNewUserToDatabase} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}



export default Register;
