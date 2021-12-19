import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './components/HomeScreen';
import EntryScreen from './components/EntryScreen';
import DummyScreen from './components/DummyScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {headerShown: false}
  },
  Entry: {
    screen: EntryScreen,
    navigationOptions: {headerShown: false}
  },
  Dummy: {
    screen: DummyScreen,
    navigationOptions: {headerShown: false}
  },
},{
    initialRouteName: "Home"
    // initialRouteName: "About"
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer/>
  );
}

 const styles = StyleSheet.create({
    MainContainer:
    {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
        // height: 50,
    },
 });

export default App;