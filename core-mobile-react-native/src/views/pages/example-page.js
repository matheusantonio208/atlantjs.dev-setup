import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles/example-style';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    example_state: []
  };

  handleNavigate = (object) => {
    const {navigation} = this.props;

    navigation.navigate('OtherExamplePage', {object});
  };

  render() {
    const { navigation}  = this.props;
    const { example_state } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container loading={example_state}>
        <Text>Hello World!</Text>
      </Container>
    );
  }
}
