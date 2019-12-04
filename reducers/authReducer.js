import {combineReducers} from "redux";
import {ACTION_FAIL_USER, ACTION_LOGIN_USER, ACTION_LOGOUT_USER} from "../constants/actionTypes";
import {withError} from "./common";

const initialState = withError({
    currentUser: {}
});

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_LOGIN_USER:
            return {...state, currentUser: action.payload};
        case ACTION_LOGOUT_USER:
            return {...state, currentUser: {} };
        case ACTION_FAIL_USER:
            return {...state, error: action.payload};
        default:
            return state;
    }
};

const authReducer = combineReducers({
    auth
});

export default authReducer;
