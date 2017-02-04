import React, { Component, PropTypes } from 'react';
import {StyleSheet, TouchableHighlight,View, Text, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Panel extends Component {
  constructor (props){
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  _onEnter(event){
    let item = this.state.text;
    this.props._onSubmit(item);
  }
  render() {
    return <View style={styles.panel}>
        <View style={styles.iconPlaceholder}>
          <Icon style={styles.icon} name="plus" size={20} />
        </View>
        <View style={styles.inputPlaceholder}>
          <TextInput style={styles.input}
            onChangeText={(text) => this.setState({text})}
            autoFocus
            placeholder='Add a todo list item'
            onKeyPress={(event) => event.nativeEvent.key == 'Enter' ? this._onEnter(event) : false }
          />
        </View>
      </View>
  }
}

const styles = StyleSheet.create({
  panel:{
    height: 50,
    marginTop:20,
    flexDirection : 'row'
  },
  iconPlaceholder:{
    width:50,
    marginTop:20
  },
  inputPlaceholder:{
    width:250,
    borderBottomWidth: 1,
    borderBottomColor:'#1595A3',
    marginLeft:20,
  },
  input:{
    height: 40
  },
  icon:{
    color:'#1595A3',
    marginLeft:20,
  }
});
