import React from 'react';
import { View, TextInput, Button} from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';

const EntryInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it
      editable={true}
    />
  );
}

const EntryScreen = (props) => {
    const paperColor = 'black'
    const date = 'December 19, 2021\n\nEntry: ';
    const [value, onChangeText] = React.useState(date);
    const link = 'https://c.tenor.com/RVRuH78_4H0AAAAd/snow-snowing.gif'

    return (
        <ImageBackground source={{uri: link}} style={{flex: 1, width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} >
            <Button 
            style={{width: '100%'}}
            color='#000000'
            title='Back to Home'
            onPress={() => props.navigation.push("Home")}
            />
            <View style={{backgroundColor: paperColor, height: '95%', width: '50%', borderWidth: 1, borderColor: 'gray'}}>
                <EntryInput
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Entry:"
                    multiline={true}
                    style={{padding: 10, backgroundColor: paperColor}}
                />
            </View>
        </ImageBackground>
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

export default EntryScreen;
