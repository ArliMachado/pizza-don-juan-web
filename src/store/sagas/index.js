import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';

import { authenticate, logout } from './login';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, authenticate),
    takeLatest(LoginTypes.LOGOUT, logout),
  ]);
}
