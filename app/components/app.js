import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';


import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

let Navigation = require('./navigation').default;
let ListContainer = require('./listcontainer').default;
let Panel = require('./panel').default;
let Firebase = require('firebase');


const styles = StyleSheet.create({
  container: {
    flex:1
  }
});


export default class App extends Component {
  constructor(props){
    super(props);

    const config = {
      apiKey: "AIzaSyD_E-hZD-v9dASc_W6fygnhvhjDbq8XSOk",
      authDomain: "daily-chores-dbe22.firebaseapp.com",
      databaseURL: "https://daily-chores-dbe22.firebaseio.com",
      storageBucket: "daily-chores-dbe22.appspot.com",
    };
    const app = firebase.initializeApp(config);
    const database =  app.database();
    const auth = app.auth();
    const storage = app.storage();

    this.databaseRef = database.ref().child('chores');

    // this.state = {
    //   newTodo: '',
    //   todoSource: new ListView.DataSource({rowHasChanged: (row1,row2) => row1 !== row2 })
    // };

    // this.chores = [];
  }

  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
            <Navigation/>
            <Panel/>
            <ListContainer/>
          </View>
      </Provider>
    );
  }
}
