import React, { Component } from 'react';
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";
import {Text, Button, View, TextInput, Platform} from "react-native";
import {Card, Input} from "react-native-elements";
import {userLoginFetch} from "../actions/authActions";
import {signedIn} from "../api/authApi";

class SignInScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    console.log('componentDidMount');
    signedIn()
      .then(signedIn => (this.props.auth.authenticated = signedIn))
      .catch(reason => console.error(reason));
  }

  handleChange = type => event => {
    this.setState({
      [type]: event.nativeEvent.text
    });
  };

  handleSubmit = event => {
    this.props.userLoginFetch(this.state)
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.authenticated) {
      this.props.navigation.navigate('Main');//.catch(reason => console.error(reason)).then(value => console.log(value));
    }
  }

  render() {
    return (
      <View>
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

          <Text>{this.props.auth.error && this.props.auth.error}</Text>

          <Button title={'Submit'} onPress={this.handleSubmit}/>
        </Card>
      </View>
    )
  }
}

SignInScreen.navigationOptions = {
  title: 'Sign In',
};

const mapStateToProps = state => ({
  ...state.auth,
});
const mapDispatchToProps = {
  userLoginFetch: userLoginFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
