import React from 'react';
import '#config/debug/reactotron-config';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Routes from '#controllers/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
