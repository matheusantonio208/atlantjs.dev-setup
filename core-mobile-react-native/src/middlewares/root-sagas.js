import { all } from 'redux-saga/effects';

import exampleSagas from './example-sagas';

export default function* rootSaga() {
  return yield all([exampleSagas]);
}
