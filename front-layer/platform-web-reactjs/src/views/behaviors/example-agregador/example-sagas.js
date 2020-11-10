import { toast } from 'react-toastify';
import { put, all, takeLatest } from 'redux-saga/effects';

import history from '#lib/history-lib.js';

import { actionSuccess } from './example-actions.js';

export function* callFunctionAfterHearAction({ payload }) {
  try {
    const { data } = payload;

    yield put(actionSuccess(data));
    history.push('/next-page');
  } catch (error) {
    toast.error('Error. Check the request!');
  }
}

export default all([takeLatest('@entity/HEAR_ACTION', callFunctionAfterHearAction)]);