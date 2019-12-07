import {combineReducers} from "redux";
import {ACTION_FAIL_USER, ACTION_LOGIN_USER, ACTION_LOGOUT_USER} from "../constants/actionTypes";
import {withError} from "./common";
import {TOKEN_KEY} from "../const";
import {AsyncStorage} from 'react-native';

const initialState = withError({
    currentUser: {},
    authenticated: false,
});

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_LOGIN_USER:
            AsyncStorage.setItem(TOKEN_KEY, action.payload.token);
            return {...state, currentUser: action.payload, authenticated: true, error: ''};
        case ACTION_LOGOUT_USER:
            AsyncStorage.removeItem(TOKEN_KEY);
            return {...state, currentUser: {}, authenticated: false, error: '' };
        case ACTION_FAIL_USER:
            AsyncStorage.removeItem(TOKEN_KEY);
            return {...state, error: action.payload, authenticated: false};
        default:
            return state;
    }
};

const authReducer = combineReducers({
    auth
});

export default authReducer;
