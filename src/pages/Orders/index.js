import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '../../store/ducks/order';
import Header from '../../components/Header';

// import { Container } from './styles';

class Orders extends Component {
  componentDidMount() {
    const { orderRequest } = this.props;
    orderRequest();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <h1>content</h1>
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
