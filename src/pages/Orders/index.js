import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import Header from '../../components/Header';

import { Container, TitleContent, TitleList } from './styles';
import OrderItem from './OrderItem';

class Orders extends Component {
  static propTypes = {
    orderRequest: PropTypes.func.isRequired,
    order: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { orderRequest } = this.props;
    orderRequest();
  }

  render() {
    const { order } = this.props;
    return (
      <Fragment>
        <Header />
        <Container>
          <TitleContent>
            <TitleList>Últimos pedidos</TitleList>
          </TitleContent>
          {order.data.map(o => (
            <OrderItem key={o.id} data={o} />
          ))}
        </Container>
      </Fragment>
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
)(Orders);
