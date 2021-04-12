//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.
import MirrarSDK from 'react-native-mirrar-sdk';

export default class FirstPage extends Component {

  render() {
const data = '{\"options\": {\"productData\": {\"Earrings\": {\"items\": [\"513319NDJAA40\",\"504002SHXABA02\",\"504002JGSABA02\",\"504002SQBABA02\",\"504002HQGAAA02\"],\"type\": \"ear\"}}}}';

    return (
          <View style={{ flex: 1, padding: 0, }}>
           <MirrarSDK
       username='tanishqwebar'
       password='w4y0EihepyIAA50U'
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