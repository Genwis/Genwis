/**
 * Created by iampamungkas on 6/22/18.
 */
import React from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

const d = Dimensions.get('window')

const style = StyleSheet.create({
  container: {
    width: d.width,
    height: d.height * 53 / 680,
    backgroundColor: "#ffffff",
    elevation: 4,
    padding: d.height * 12 / 680,
    marginBottom: 15,
    left : 0,
  },
})

export const NavBarComponent = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../assets/icon/logo_type_hijau_2018-06-22/drawable-xxxhdpi/logo_type_hijau.png')}
        style={{
          height: d.height * 27 / 680,
          width: d.width * 72 / 360,
          resizeMode: 'contain'
        }}
      />
    </View>
  )
}