//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'MirrarSDK Example',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#e0115f',
      //Sets Header color
    },
    headerTintColor: 'white',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button color="#e0115f"
        title='Launch Mirrar'
        onPress={() =>this.props.navigation.navigate('SecondPage')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});