import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   useColorScheme,
   Button,
 } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
// import { createStackNavigator } from "react-navigation"

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import DummyScreen from './components/DummyScreen';
import { NavigationContainer } from '@react-navigation/native';

// const App = () => {
//   return (
//     // <View style = {styles.MainContainer}>
//     <View >
//         {/* <SafeAreaView style = {styles.MainContainer}> */}
//       <ImageBackground source={{uri: 'https://bestanimations.com/media/trees/763670577starry-night-forest-nature-gif-3.gif'}}
//       style={{width: '100%', height: '100%'}} > 
//         <View style = {styles.MainContainer}>
//             <Button 
//             title="Entry"
//             />
//             <Button 
//             title="Explore"
//             />
//             <Button 
//             title="Interact"
//             />
//         </View>
//       </ImageBackground>
//       </View>
//   );
// }

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {headerShown: false}
  },
  About: {
    screen: AboutScreen,
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
    <AppContainer 
    onNavigationStateChange={(prevState,newState,action) => console.log(prevState, newState, action)}
    />
  );
}

// const AppStack = createStackNavigator();
// const Navigator = () => {
//   return(
//     <NavigationContainer>
//       <AppStack.Navigator screenOptions={{ headerShown: false }} >
//         <AppStack.Screen name="Home" component={HomeScreen} />
//         <AppStack.Screen name="About" component={AboutScreen} />
//       </AppStack.Navigator>

//     </NavigationContainer>
//   );
// }


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
// export default Navigator;