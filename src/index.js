import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { HashRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { store } from './state'

// Imports
import { AuthProvider } from './auth'
import App from './App';
import './index.css'

// Service Worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();