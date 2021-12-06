// // Aboutscreen.js
// // import { pipelineTopicExpression } from '@babel/types';
// import React, { Component } from 'react';
// import { Button, View, Text } from 'react-native';
// // import { createStackNavigator, createAppContainer } from 'react-navigation';

// const AboutScreen = (props) => {
//     return (
//     //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <View>
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text>About Screen</Text>
//         {/* <Button
//         title="Go back"
//         onPress={() => props.navigation.navigate('Home')}
//         /> */}
//       </View>
//     </View>
//     )
// }

// export default AboutScreen;


// Homescreen.js
import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';

import { Image, StyleSheet, ImageBackground } from 'react-native';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   useColorScheme,
   Button,
 } from 'react-native';

const AboutScreen = (props) => {
// const AboutScreen = ({ navigation }) => {
    const { state, navigate} = props.navigation;
    console.log(state);
    const parent = props.navigation.dangerouslyGetParent();
    const parentKey = parent.state.routes[0]['key'];
    console.log('PROPS', props);
    // console.log(props.navigation);

    return (
        <View >
        {/* <View > */}
                <View style = {styles.MainContainer}>
                    <Button 
                    title="Go Back"
                    // onPress={() => props.navigation.navigate("Home")}
                    // onPress={() => props.navigation.actions.goBack(parentKey)}
                    // onPress={() => props.navigation.goBack()}
                    />
                    {/* <Button 
                    title="Go To Home"
                    onPress={() => props.navigation.navigate('Home')}
                    />
                    <Button 
                    title="Go To Top"
                    onPress={() => props.navigation.popToTop()}
                    /> */}
                </View>
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

export default AboutScreen;

// export default class Aboutscreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>About Screen</Text>
//         <Button 
//         title="press me"
//         onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     )
//   }
// }