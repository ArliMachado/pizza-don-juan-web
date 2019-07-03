import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import logo from '../../assets/logo.png';

import { Container, TitleContainer } from './styles';

class Header extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <img src={logo} alt="pizzadonjuan" />
          <h2>Pizzaria Don Juan</h2>
        </TitleContainer>
        <h1>sair</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
