import React, { Component } from 'react';
import {connect} from "react-redux";
import {Button, Text, Input, Card} from "react-native-elements";
import {userRegisterFetch} from "../actions/authActions";

class SignUpScreen extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("state", this.state);
    if (this.props.auth.authenticated) {
      console.log("perehod to login", this.props.auth)
      this.props.navigation.navigate('Main');
    }
  }

  handleChange = type => event => {
    this.setState({
      [type]: event.nativeEvent.text
    });
  };

  handleSubmit = event => {
    console.log("this.state", this.state);
    this.props.userRegisterFetch(this.state);
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
