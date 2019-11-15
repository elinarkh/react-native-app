import React, { Component } from 'react';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import {Button} from "react-native-web";
import Text from "react-native-web/dist/exports/Text";

class SignUpScreen extends Component {

  state = {
    username: "",
    password: "",
    email: ""
  };

  componentWillMount() {
    console.log('Component will mount!')
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    this.props.userPostFetch(this.state)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Text>Sign Up</Text>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
        /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        /><br/>

        <label>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
        /><br/>
        <Button to="/"><input type='submit' value="Submit"/></Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(authActions.userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUpScreen);
