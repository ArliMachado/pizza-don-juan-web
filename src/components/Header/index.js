import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FaShoppingBag } from 'react-icons/fa';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import { Creators as LoginActions } from '../../store/ducks/login';
import logo from '../../assets/logo.png';

import {
  Container,
  TitleContent,
  ProfileContent,
  Profile,
  NameText,
  ExitButton,
  OrdersButton,
} from './styles';

class Header extends Component {
  static propTypes = {
    logoutRequest: PropTypes.func.isRequired,
    order: PropTypes.shape({
      user: PropTypes.shape({
        username: PropTypes.string,
      }),
    }).isRequired,
  };

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
          <Profile>
            <NameText>{user.username}</NameText>
            <ExitButton type="button" onClick={this.handleLogout}>
              Sair do app
            </ExitButton>
          </Profile>
          <OrdersButton>
            <IconContext.Provider value={{ size: 16 }}>
              <FaShoppingBag />
            </IconContext.Provider>
          </OrdersButton>
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
