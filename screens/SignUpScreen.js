import React, { Component } from 'react';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import { View } from "react-native";
import {Button, Text, Input, Card} from "react-native-elements";
import {userRegisterFetch} from "../actions/authActions";

class SignUpScreen extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.authenticated) {
      this.props.navigation.navigate('Main');//.catch(reason => console.error(reason)).then(value => console.log(value));
    }
  }

  handleChange = type => event => {
    this.setState({
      [type]: event.nativeEvent.text
    });
  };

  handleSubmit = event => {
    this.props.userRegisterFetch(this.state)
  };

  render() {
    return (
      <Card>
        <Text>Username</Text>
        <Input
          name='username'
          placeholder='Username'
          onChange={this.handleChange('username')}
        />

        <Text>Password</Text>
        <Input
          secureTextEntry={true}
          name='password'
          placeholder='Password'
          onChange={this.handleChange('password')}
        />

        <Text>Confirm password</Text>
        <Input
          secureTextEntry={true}
          name='confirmPassword'
          placeholder='Confirm password'
          onChange={this.handleChange('confirmPassword')}
        />

        <Text>{this.props.auth.error && this.props.auth.error}</Text>

        <Button onPress={this.handleSubmit} title={'Submit'} />
      </Card>
    )
  }
}

SignUpScreen.navigationOptions = {
  title: 'Sign Up',
};

const mapStateToProps = state => ({
  ...state.auth,
});

const mapDispatchToProps = ({
  userRegisterFetch: userRegisterFetch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
