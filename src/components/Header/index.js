import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import { Creators as LoginActions } from '../../store/ducks/login';
import logo from '../../assets/logo.png';

import {
  Container, TitleContent, ProfileContent, NameText,
} from './styles';

class Header extends Component {
  handleLogout = () => {
    const { logoutRequest } = this.props;
    logoutRequest();
  };

  render() {
    const {
      order: { user },
    } = this.props;

    return (
      <Container>
        <TitleContent>
          <img src={logo} alt="pizzadonjuan" />
          <h2>Pizzaria Don Juan</h2>
        </TitleContent>
        <ProfileContent>
          <NameText>{user.username}</NameText>
          <button type="button" onClick={this.handleLogout}>
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
const Actions = { ...LoginActions, ...OrderActions };

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
