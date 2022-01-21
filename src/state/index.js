import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

// Root reducer
import Reducers from './root-reducer';

// User watchers
import {
  watcher_login,
  watcher_logout,
  watcher_register,
  watcher_getUser
} from "./modules/user";

import {
  watcher_getHairstyles
} from "./modules/hairstyles";

// ==============================|| REDUX - MAIN STORE ||============================== //

// Saga middleware
export const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares = [thunk];

// Creating store
const createStoreWithFirebase = compose(
  applyMiddleware(...middlewares, sagaMiddleware),
  composeWithDevTools()
)(createStore);

// Store
const store = createStoreWithFirebase(Reducers);

// Running auth watchers
//? User
sagaMiddleware.run(watcher_login);
sagaMiddleware.run(watcher_logout);
sagaMiddleware.run(watcher_register);
sagaMiddleware.run(watcher_getUser);
//?
sagaMiddleware.run(watcher_getHairstyles);

// Persister
const persister = 'RWA';

export { store, persister };