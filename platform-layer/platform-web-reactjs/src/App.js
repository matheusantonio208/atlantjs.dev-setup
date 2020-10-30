import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import '#config/debug/reactotron-config.js';

import history from '#lib/history-lib.js';

import { store, persistor } from '#config/redux-config.js';

import GlobalStyle from '#styles/global-style.js';

import Header from '#components/globals/Header.js';

import Routes from '#behaviors/routes-front.js';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
