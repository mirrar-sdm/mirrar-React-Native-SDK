//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.
import MirrarSDK from 'react-native-mirrar-sdk';

export default class FirstPage extends Component {

  render() {
  const data = '';
    return (
          <View style={{ flex: 1, padding: 0, }}>
           <MirrarSDK
       username=''
       password=''
       data={data}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});