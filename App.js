import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers';
import firebase from "firebase";

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAbV56w4NTAgJvHHD1S7f2Myx_mktu2z7w",
      authDomain: "manager-a8b68.firebaseapp.com",
      databaseURL: "https://manager-a8b68.firebaseio.com",
      projectId: "manager-a8b68",
      storageBucket: "",
      messagingSenderId: "332846513301",
      appId: "1:332846513301:web:59917c05f2a005fc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello! 
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;