import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from "./app/App";


export default class Wakey_Friday extends Component {
  render() {
    return(<App />)
  }
}


AppRegistry.registerComponent('Wakey_Friday', () => Wakey_Friday);
