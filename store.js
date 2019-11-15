import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const middlewares = [ thunk ];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({ collapsed: true }));
  }
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
