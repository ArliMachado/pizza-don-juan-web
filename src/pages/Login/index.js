import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as LoginActions } from '../../store/ducks/login';

import { Container, Form, MessageError } from './styles';
import pizzaLogo from '../../assets/logo.png';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      error: PropTypes.bool,
      message: PropTypes.string,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { loginRequest } = this.props;
    loginRequest(this.state);
  };

  render() {
    const { email, password } = this.state;
    const {
      login: { error, message },
    } = this.props;

    return (
      <Container>
        <img src={pizzaLogo} alt="PizzaDonJuan" />
        <Form onSubmit={this.handleLogin}>
          <input
            type="text"
            value={email}
            placeholder="Seu e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          {error && <MessageError>{message}</MessageError>}
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
