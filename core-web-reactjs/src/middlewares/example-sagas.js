import { select, put, all, takeLatest } from 'redux-saga/effects';

import { action } from '#controllers/example-module/example-actions';
import history from '#lib/history-lib';

function* middlewareAction({ id }) {
  const dataExistsInState = yield select((state) =>
    state.data.find((p) => p.id === id),
  );

    const data = {
      isExists: dataExistsInState,
    };

    yield put(action(data));
    history.push('/next-page');
  }

export default all([
  takeLatest('@example/ACTION_REQUEST', middlewareAction),
]);
