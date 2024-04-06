import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import Colors from '../misc/Colors';
import RoundButtonIcon from '../components/RoundButtonIcon';

const Intro = () => {
  const [user, setUSer] = useState();

  const onHandleText = text => {
    setUSer(text);
  };
  const handleSubmit = async() => {
    // const user = {name:name}
  // await  AsyncStorage.setItem('user', JSON.stringify(user))
    
  }

  return (
    <>
    <StatusBar  />
    <View>
      <Text style={styles.inputText}>Enter your name to continue</Text>
      <TextInput
      value={user}
        placeholder="Enter your name to continue"
        style={styles.textInput}
        onChangeText={onHandleText}
      />
     {user.trim().length > 3 ?<RoundButtonIcon antIconName="arrowright" onPress={handleSubmit}  /> : null}
    </View>
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({
  textInput: {
    height: 60,

    paddingLeft: 15,
    fontSize: 25,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    borderRadius: 10,
    marginBottom:15
  },
  inputText:{
    alignSelf:"flex-start",
    paddingLeft:24,
    marginBottom:5,
    opacity:0.5,
    fontSize:19
  }
});
