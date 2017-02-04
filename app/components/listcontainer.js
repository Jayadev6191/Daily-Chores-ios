import React, { Component, PropTypes } from 'react';
import {StyleSheet, TouchableHighlight,View, Text, TextInput } from 'react-native';

export default class Navigation extends Component {
  constructor (props){
    super(props);
    this.state = { text: 'search' };
  }
  render() {
    return <View style={styles.list_container}></View>
  }
}

const styles = StyleSheet.create({
  list_container:{
    flex: 1
  }
});
