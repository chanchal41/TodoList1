import React, { useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Intro from './screens/Intro';

function App() {

// const findUSer = async() => {
// //  const result = await AsyncStorage.getItem('user')
//  console.log(result);
// }
  
// useEffect (()=>{
//   findUSer();
// },[])

  return (
    <View style={styles.container}>
      <Intro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
