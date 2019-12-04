import {createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";

const createStack = (screen, label) => {
  const stack = createStackNavigator({
    SignIn: screen,
  });

  stack.navigationOptions = {
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };
  return stack;
};

export default createBottomTabNavigator({
  SignIn: createStack(SignInScreen, 'Sign In'),
  SignUp: createStack(SignUpScreen, 'Sign up'),
});
