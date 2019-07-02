import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';

import { Container } from './styles';

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Pizzaria Don Juan</h1>
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
