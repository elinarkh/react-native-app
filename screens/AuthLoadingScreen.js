import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import Text from "react-native-web/dist/exports/Text";
import {me} from "../api/authApi";
import {connect} from "react-redux";

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {

        console.log('AuthLoadingScreen running');

        const userToken = await AsyncStorage.getItem('userToken');

        if (!userToken) {
          this.props.navigation.navigate('Auth');
        } else {
          const response = await me(userToken);
          if (response.status !== 500) {
            this.props.navigation.navigate('Auth');
          } else {
            this.props.navigation.navigate('Main');
          }
        }

        //
        // // This will switch to the App screen or Auth screen and this loading
        // // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapToStateProps = state => {
  return {
    error: state.error,
    currentUser: state.currentUser,
    authenticated: state.authenticated,
  }
};

export default connect(mapToStateProps, null)(AuthLoadingScreen);
