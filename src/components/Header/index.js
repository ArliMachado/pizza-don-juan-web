import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import logo from '../../assets/logo.png';

import {
  Container, TitleContent, ProfileContent, NameText,
} from './styles';

class Header extends Component {
  componentDidMount() {
    const { orderRequest } = this.props;
  }

  render() {
    return (
      <Container>
        <TitleContent>
          <img src={logo} alt="pizzadonjuan" />
          <h2>Pizzaria Don Juan</h2>
        </TitleContent>
        <ProfileContent>
          <NameText>Nome</NameText>
          <button type="button" onClick={() => alert('teste')}>
            Sair do app
          </button>
        </ProfileContent>
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
