import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer
});

export default rootReducer;
