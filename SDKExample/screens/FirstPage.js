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


componentDidMount(){

 async () => {
      // We need to ask permission for Android only
      if (Platform.OS === 'android') {
           // Calling the permission function
           const granted = await PermissionsAndroid.request(
             PermissionsAndroid.PERMISSIONS.CAMERA,
             {
               title: 'Example App Camera Permission',
               message: 'Example App needs access to your camera',
             },
           );
           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             // Permission Granted
             proceed();
           } else {
             // Permission Denied
             alert('CAMERA Permission Denied');
           }
         } else {
           proceed();
         }
    };

    }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button color="#e0115f"
        title='Launch Mirrar'
        onPress={() =>this.props.navigation.navigate('SecondPage', {
                                                       userName: 'tanishqwebar',
                                                       password: 'w4y0EihepyIAA50U',
                                                       jsonData: "{\"options\": {\"productData\": {\"Earrings\": {\"items\": [\"513319NDJAA40\",\"504002SHXABA02\",\"504002JGSABA02\",\"504002SQBABA02\",\"504002HQGAAA02\"],\"type\": \"ear\"}}}}",
                                                   })}
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