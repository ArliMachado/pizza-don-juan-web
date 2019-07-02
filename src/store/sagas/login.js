import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* authenticate(action) {
  try {
    const { user } = action.payload;

    const response = yield call(api.post, '/sessions?origin=BROWSER', user);

    console.tron.log(`user: ${JSON.stringify(response)}`);
  } catch ({ response: { data } }) {
    yield put(LoginActions.loginFailure(data[0].message));
  }
}
