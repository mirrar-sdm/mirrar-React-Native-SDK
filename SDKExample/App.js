
//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';
//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './screens/FirstPage';
//import SecondPage from './screens/SecondPage';
import WebPage from 'react-native-mirrar-sdk';
//import all the screens we are going to switch

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book
    FirstPage: { screen: FirstPage },
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: { screen: WebPage,
      navigationOptions: {
             headerShown: false,
           }},
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);