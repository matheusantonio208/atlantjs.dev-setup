import { all } from 'redux-saga/effects';

import exampleSagas from './example-agregador/example-sagas.js';

export default function* rootSaga() {
  return yield all([exampleSagas]);
}
