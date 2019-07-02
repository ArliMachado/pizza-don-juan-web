import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import {
  setAuthToken, setUser, removeAuthToken, removeUser,
} from '../../services/auth';

import { Creators as LoginActions } from '../ducks/login';

export function* authenticate(action) {
  try {
    const { user: login } = action.payload;

    const {
      data: { user, token },
    } = yield call(api.post, '/sessions?origin=BROWSER', login);

    setAuthToken(token);

    setUser(user);

    yield put(push('/orders'));
  } catch ({ response: { data } }) {
    yield put(LoginActions.loginFailure(data[0].message));
  }
}
