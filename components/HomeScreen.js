// Homescreen.js
import React from 'react';
import {View, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = (props) => {

    return (
        <View >
        {/* <View > */}
            <ImageBackground source={{uri: 'https://bestanimations.com/media/trees/763670577starry-night-forest-nature-gif-3.gif'}}
            style={{width: '100%', height: '100%'}} > 
                <View style = {styles.MainContainer}>
                    <Button 
                    title="Entry"
                    onPress={() => props.navigation.push("Entry")}
                    />
                    <Button 
                    title="Explore"
                    onPress={() => props.navigation.push("Dummy")}
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