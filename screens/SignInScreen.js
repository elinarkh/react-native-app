import React, { Component } from 'react';
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";
import {Text, Button, View, TextInput, Platform} from "react-native";
import {Card, Input} from "react-native-elements";
import {userLoginFetch} from "../actions/authActions";

class SignInScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = type => event => {
    console.log(event);
    this.setState({
      [type]: event.nativeEvent.text
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    this.props.userLoginFetch(this.state)
  };

  render() {
    return (
      <Card>
        <Text>Username</Text>
        <Input
          placeholder='Username'
          onChange={this.handleChange('username')}
        />

        <Text>Password</Text>
        <Input
          secureTextEntry={true}
          placeholder='Password'
          onChange={this.handleChange('password')}
        />

        <Button title={'Submit'} onPress={this.handleSubmit}/>
      </Card>
    )
  }
}
// {/*<Button onPress{()=> this.props.navigation('HomeScreen')}><input type='submit'/></Button>*/}

SignInScreen.navigationOptions = {
  title: 'Sign In',
};

const mapToStateProps = state => {
  return {
    error: state.error,
    currentUser: state.currentUser,
  }
};

const mapDispatchToProps = {
  userLoginFetch: userLoginFetch,
};

export default connect(mapToStateProps, mapDispatchToProps)(SignInScreen);

