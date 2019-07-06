import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import Header from '../../components/Header';

import { Container, TitleContent, TitleList } from './styles';
import OrderItem from './OrderItem';

class Orders extends Component {
  componentDidMount() {
    const {
      orderRequest,
      order: { order },
    } = this.props;
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
