/**
 * Created by iampamungkas on 6/22/18.
 */
import React from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const d = Dimensions.get('window')

const style = StyleSheet.create({
  container: {
    width: d.width,
    height: d.height * 53 / 680,
    backgroundColor: "#27ae60",
    paddingTop: d.height * 16 / 680,
    paddingLeft: d.height * 16 / 680,
    paddingRight: d.height * 16 / 680,
    left : 0,
    flexDirection: 'row'
  },
  text: {
    color: "#ffffff",
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
})

export const NavBarComponent = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        History
      </Text>
      <TouchableOpacity style={{ position:'absolute', right: d.height * 30 / 680, top: d.height * 16 / 680, bottom: d.height * 16 / 680}}>
        <Icon name="md-more" size={20} style={{ color: '#ffffff'}} />
      </TouchableOpacity>
    </View>
  )
}