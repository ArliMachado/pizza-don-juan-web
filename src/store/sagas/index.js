import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { Types as OrderTypes } from '../ducks/order';

import { authenticate, logout } from './login';
import { getOrders } from './order';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, authenticate),
    takeLatest(LoginTypes.LOGOUT, logout),
    takeLatest(OrderTypes.REQUEST, getOrders),
  ]);
}
