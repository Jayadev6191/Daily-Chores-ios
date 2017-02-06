import React, { Component, PropTypes } from 'react';
import {StyleSheet,
        TouchableHighlight,
        View,
        Text,
        TextInput,
        TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Panel extends Component {
  constructor (props){
    super(props);
    this.state = {
      chores:[],
      newChore:'',
      selectedItem:null
    };
  }
  handlePress = () => {
    if(this.state.newChore === ''){
      return;
    }else {
      const chores = [...this.state.chores, this.state.newChore];
      this.setState({chores,newChore: ''});
    }
  }
  handleChange = (text) => {
    this.setState({newChore:text});
  }
  handleClicked = (item) => {
    // done/undone and delete logic
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                value={this.state.newChore}
                onChangeText={this.handleChange}
                autoFocus
              />
            </View>
            <TouchableHighlight style={styles.button} onPress={this.handlePress}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.list}>
          {this.state.chores.map((chore, index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=>{this.handleClicked(index)}}>
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{chore}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:40
  },
  form:{
    marginTop:5,
    flexDirection : 'row'
  },
  inputContainer:{
    flex:0.8,
    borderBottomWidth: 1,
    borderBottomColor:'#1595A3'
  },
  input:{
    height: 40,
    fontSize: 20
  },
  button:{
    flex:0.2,
    backgroundColor:'#1595A3',
    height:40,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:5
  },
  buttonText:{
    color:'#FFFFFF',
    fontSize: 20
  },
  list:{
    marginTop: 20
  },
  listItem:{
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey'
  },
  listItemText:{
    flex:1,
    color:'grey',
    fontSize:24,
    textAlign:'left',
    marginTop:5,
    marginBottom:5
  }
});
