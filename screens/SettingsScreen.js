import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Card} from "react-native-elements";
import {Button} from "react-native-elements";
import View from "react-native-web/dist/exports/View";
import {userLoginFetch, userLogout} from "../actions/authActions";
import {connect} from "react-redux";

class SettingsScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  handleLogout = () => {
    this.props.userLogout();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.auth);

    if (!this.props.auth.authenticated) {
      this.props.navigation.navigate('Auth');
    }
  }

  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render() {
    return (
      <Card>
        <Button title={'Logout'} onPress={this.handleLogout}/>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  userLogout: userLogout,
};

const mapStateToProps = state => ({
  ...state.auth,
});

SettingsScreen.navigationOptions = {
  title: 'app.json',
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
