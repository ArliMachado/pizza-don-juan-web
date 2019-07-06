import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}),
};

PrivateRoute.defaultProps = {
  location: null,
};

export default PrivateRoute;
