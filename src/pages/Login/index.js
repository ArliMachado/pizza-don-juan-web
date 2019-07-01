import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Form } from './styles';
import pizzaLogo from '../../assets/logo.png';

class Login extends Component {
  render() {
    return (
      <Container>
        <img src={pizzaLogo} />
        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Login);
