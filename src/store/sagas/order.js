import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { getUser } from '../../services/auth';

import { Creators as OrderActions } from '../ducks/order';

export function* getOrders() {
  try {
    const user = yield call(getUser);
    const { data: orders } = yield call(api.get, '/orders');

    yield put(OrderActions.orderSuccess({ orders, user }));
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}
