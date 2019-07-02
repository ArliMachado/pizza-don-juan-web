import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import login from './login';
import order from './order';
import history from '../../routes/history';

export default combineReducers({
  router: connectRouter(history),
  login,
  order,
});
