import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import {createStackNavigator} from "react-navigation-stack";
import PostScreen from "../screens/PostScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen, });

export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            AuthLoading: AuthLoadingScreen,
            Main: MainTabNavigator,
            Post: PostScreen,
            Auth: AuthStack,
        }, {
            initialRouteName: 'AuthLoading',
        }
    )
);
