/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';


let App = require('./app/components/app').default;

export class dailychores extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('dailychores', () => dailychores);
