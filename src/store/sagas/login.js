import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* authenticate(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.post, '/sessions?origin=BROWSER', user);

    console.tron.log(`user: ${JSON.stringify(data)}`);
  } catch (err) {
    yield put(LoginActions.loginFailure(err));
    // if (erro.status === 401) {
    //   // yield put(LoginActions.loginFailure('Usuário não autorizado'));
    //   yield put(LoginActions.loginFailure('Usuário não autorizado'));
    // } else {
    //   console.tron.log(`user: ${JSON.stringify(erro)}`);

    //   yield put(LoginActions.loginFailure('Houve um erro ao tentar efetuar login'));
    // }
  }
}
