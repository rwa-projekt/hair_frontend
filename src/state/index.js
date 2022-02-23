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

// Hairstyle watchers
import {
  watcher_getHairstyles
} from "./modules/hairstyles";

// Barber watchers
import {
  watcher_getBarbers,
  watcher_getClients
} from "./modules/barbers";

// Reservations watchers
import {
  watcher_getReservations
} from "./modules/reservations";

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

// Running auth watchers
//? User
sagaMiddleware.run(watcher_login);
sagaMiddleware.run(watcher_logout);
sagaMiddleware.run(watcher_register);
sagaMiddleware.run(watcher_getUser);
//? Hairstyles
sagaMiddleware.run(watcher_getHairstyles);
//? Barbers
sagaMiddleware.run(watcher_getBarbers);
sagaMiddleware.run(watcher_getClients);
//? Reservvations
sagaMiddleware.run(watcher_getReservations);

// Persister
const persister = 'RWA';

export { store, persister };