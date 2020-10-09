import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '#views/styles/example-style'
import * as actionExample from '#controllers/example-module/example-actions';

function ExamplePage(){
  return (
    <Container>
      <h1>Example Page</h1>
    </Container>
  )
}

ExamplePage.propTypes = {
  repository: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  repository: state.repository.map((item) => ({
    ...item,
    newItem: 'Ohh Yeah!'
  }))
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(actionExample, dispatch);

export default connect(mapDispatchToProps, mapStateToProps)(ExamplePage)