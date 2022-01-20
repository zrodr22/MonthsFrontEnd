import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, Text, ScrollView} from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const EntryInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it
      editable={true}
    />
  );
}

const Page = (props) => {
  return(
    <View style={{flexDirection:'row',justifyContent : 'space-between', height: 750, width: '50%'}}>
      <View style={{backgroundColor: props.paperColor, height: 715, width: 20, borderWidth: 1, borderColor: 'gray'}}></View>
      <View style={{backgroundColor: props.paperColor, height: 715, width: 500, borderWidth: 1, borderColor: 'gray'}}>
          <EntryInput
              {...props}
              onContentSizeChange={event => 
                {
                  const h = event.nativeEvent.contentSize.height;
                  if (h > 660) {
                        const updatedValues = [...props.values];
                        updatedValues.push('')
                        props.updateValues(updatedValues)

                        const currentPages = props.pages;
                        const updatedPages = [...props.pages];
                        updatedPages.push(currentPages[currentPages.length - 1] + 1)
                        props.addPage(updatedPages);
                  }
                }
              }
              placeholder="Entry:"
              multiline={true}
              style={{padding: 10, backgroundColor: props.paperColor}}
          />
      </View>
    </View>
  )
}

const updateText = (newText, oldText) => {
  const updatedText = oldText + newText;
  return updatedText; 
}

const calcNumLines = (height) => {
  // return (height-42.4)/18.4 + 1;
  return height;
}

const EntryScreen = (props) => {
    const paperColor = 'black'
    const date = 'December 19, 2021\n\nEntry: ';
    const [values, updateValues] = useState([date]);
    const [pages, addPage] = useState([0]);
    const link = 'https://c.tenor.com/RVRuH78_4H0AAAAd/snow-snowing.gif'
    const w = 749;

    const [displayText, setDisplay] = useState("waiting");

    // Need to focus the next page after adding new page
    let NewPage = pages.map((page, index) => {
      return(
        <Page 
          key={index} 
          onChangeText={text => {
            const updatedValues = [...values];
            updatedValues[index] = text;
            updateValues(updatedValues);
            }
          }
          paperColor={paperColor}
          value={values[index]} 
          values={values}
          addPage={addPage}
          updateValues={updateValues}
          pages={pages}
        />
      )
    })

    return (
        <ImageBackground source={{uri: link}} style={{flex: 1, width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} >
            <Button 
            style={{width: '100%'}}
            color='#000000'
            title='Back to Home'
            onPress={() => props.navigation.push("Home")}
            />
            <Button
            title='Send a request'
            onPress={async () => {
              const res = await fetch('http://localhost:8000/polls/')
              const body = res._bodyText
              setDisplay(body)
              console.log(body)
              }}
            />
            <Text>
              {displayText}
            </Text>

            <ScrollView style={{flexDirection:'column', width: 500}}>
              {NewPage}
            </ScrollView>
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
