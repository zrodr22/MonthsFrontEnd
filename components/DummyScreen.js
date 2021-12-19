
// Homescreen.js
import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Image, StyleSheet, ImageBackground } from 'react-native';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   useColorScheme,
   Button,
 } from 'react-native';

const HomeScreen = (props) => {
// const HomeScreen = ({ navigation }) => {
    const { state, navigate} = props.navigation;
    console.log(state);
    console.log('I HAVE ARRIVED');

    return (
        <View >
        {/* <View > */}
            <ImageBackground source={{uri: 'https://bestanimations.com/media/trees/763670577starry-night-forest-nature-gif-3.gif'}}
            style={{width: '100%', height: '100%'}} > 
                <Text> Dummy Screen </Text>
                <View style = {styles.MainContainer}>
                    <Button 
                    title="Entry"
                    onPress={() => props.navigation.push("Home")}
                    />
                    <Button 
                    title="Explore"
                    />
                    <Button 
                    title="Interact"
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer:
    {
        // flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
        // height: 50,
    },
 });

export default HomeScreen;

// export default class Homescreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//           <Button
//           title="Go to About"
//           onPress={() => this.props.navigation.navigate('About')}
// />
//       </View>
//     )
//   }
// }
