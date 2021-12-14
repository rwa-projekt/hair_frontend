import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

// Root reducer
import Reducers from './root-reducer';


// ==============================|| REDUX - MAIN STORE ||============================== //

// Saga middleware
export const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares = [thunk];

// Creating store
const createStoreWithFirebase = compose(
  applyMiddleware(...middlewares, sagaMiddleware),
  // composeWithDevTools()
)(createStore);

// Store
const store = createStoreWithFirebase(Reducers);

// Persister
const persister = 'RWA';

export { store, persister };