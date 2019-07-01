import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
