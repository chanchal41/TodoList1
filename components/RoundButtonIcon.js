import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Colors from '../misc/Colors';    

const RoundButtonIcon = ({antIconName, size, color, style, onPress}) => {
  return (
 
        <Icon 
        name={antIconName}
        size={size || 24}
        color={color || Colors.LIGHT}
       style={[styles.icon,{...style}]}
       onPress = {onPress}
        />
  
  )
}

export default RoundButtonIcon

const styles = StyleSheet.create({
  icon:{
    backgroundColor: Colors.PRIMARY,
    padding:15,
    borderRadius:50,
    elevation:5
  }
})