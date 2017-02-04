import React, { Component, PropTypes } from 'react';
import {StyleSheet, TouchableHighlight,View, Text, TextInput } from 'react-native';

export default class Navigation extends Component {
  constructor (props){
    super(props);
    this.state = { text: 'search' };
  }
  render() {
    return <View style={styles.navigation}>
            <Text style={styles.input}>Daily Chores</Text>
        </View>
  }
}

const styles = StyleSheet.create({
  navigation:{
    backgroundColor: '#1595A3',
    height:50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    fontSize:20,
    color:'#FFFFFF',
    textAlign: 'center'
  }
  // card_photo:{
  //   width:100,
  //   height:100
  // },
  // card_details:{
  //   height:150
  // },
  // card_details_header:{
  //   fontSize:20
  // },
  // card_details_content:{
  //   width:250
  // },
  // button:{
  //   backgroundColor: 'powderblue',
  //   fontSize:20
  // }
});
