import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import { getUser } from '../../services/auth';

import { Creators as OrderActions } from '../ducks/order';

export function* getOrders(action) {
  try {
    // const user = yield call(getUser);

    const { data } = yield call(api.get, '/orders');

    console.tron.log(`data: ${JSON.stringify(data)}`);

    //   const {
    //     data: { user, token },
    //   } = yield call(api.post, '/sessions?origin=BROWSER', login);

    //   yield call(setAuthToken, token);

    //   yield call(setUser, user);

    //   yield put(push('/orders'));
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}
