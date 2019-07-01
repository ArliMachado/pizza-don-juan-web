import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, FormContent, Form } from './styles';

class Login extends Component {
  render() {
    return (
      <Container>
        <FormContent>
          <Form onSubmit={() => {}}>
            <input type="text" placeholder="Seu e-mail" />
          </Form>
        </FormContent>
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
