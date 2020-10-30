import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import persistReducers from '#config/persist-config.js';

import rootReducer from '#behaviors/root-reducer.js';
import rootSaga from '#behaviors/root-sagas.js';

const { NODE_ENV } = process.env;

const sagaMonitor =
  NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
  NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
