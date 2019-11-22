import React, { Component } from 'react';
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";
import { Text, Button, View, TextInput } from "react-native";

class SignInScreen extends Component {

  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLoginFetch(this.state)
  };

  render() {
    return (
      <View>
        <Text>Login</Text>

        <Text>Username</Text>
        <TextInput
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />
      </View>
    )
  }
}
// {/*<Button onPress{()=> this.props.navigation('HomeScreen')}><input type='submit'/></Button>*/}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(authActions.userLoginFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignInScreen);

