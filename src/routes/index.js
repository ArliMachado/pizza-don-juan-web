import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Orders from '../pages/Orders';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/orders" component={Orders} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
