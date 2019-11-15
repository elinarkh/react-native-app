import {combineReducers} from "redux";

const initialState = {
    currentUser: {}
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload};
        case 'LOGOUT_USER':
            return {...state, currentUser: {} };
        default:
            return state;
    }
};

const authReducer = combineReducers({
    auth
});

export default authReducer;