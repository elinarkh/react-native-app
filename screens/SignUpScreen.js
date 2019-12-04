import React, { Component } from 'react';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import { View } from "react-native";
import {Button, Text, Input, Card} from "react-native-elements";

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
      <Card>
        <Text>Username</Text>
        <Input
          name='username'
          placeholder='Username'
          onChange={this.handleChange}
        />

        <Text>Password</Text>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          onChange={this.handleChange}
        />

        <Button title={'Submit'} />
      </Card>
    )
  }
}

SignUpScreen.navigationOptions = {
  title: 'Sign Up',
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(authActions.userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUpScreen);
