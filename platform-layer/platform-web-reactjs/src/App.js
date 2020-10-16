import 'dotenv/config';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';

import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header/index';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
