import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthTabNavigator from "./AuthTabNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import PostScreen from "../screens/PostScreen";

export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            AuthLoading: AuthLoadingScreen,
            Main: MainTabNavigator,
            Post: PostScreen,
            Auth: AuthTabNavigator,
        }, {
            initialRouteName: 'AuthLoading',
        }
    )
);
