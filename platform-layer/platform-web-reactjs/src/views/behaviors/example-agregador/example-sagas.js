import { toast } from 'react-toastify';
import { select, put, all, takeLatest } from 'redux-saga/effects';

import history from '#lib/history-lib.js';

import { action } from './example-actions.js';

function* middlewareAction({ id }) {
  try {
    const dataExistsInState = yield select((state) =>
      state.data.find((p) => p.id === id),
    );

    const data = {
      isExists: dataExistsInState,
    };

    yield put(action(data));
    history.push('/next-page');
  } catch (error) {
    toast.error('Error. Check the request');
  }
}

export default all([takeLatest('@example/ACTION_REQUEST', middlewareAction)]);
