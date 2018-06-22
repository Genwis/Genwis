/**
 * Created by iampamungkas on 6/22/18.
 */
import React from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const d = Dimensions.get('window')

const style = StyleSheet.create({
  container: {
    width: d.width,
    height: d.height * 53 / 680,
    backgroundColor: "#ffffff",
    elevation: 7,
    padding: d.height * 12 / 680,
    marginBottom: 15,
    left : 0,
    flexDirection: 'row'
  },
})

export const NavBarComponent = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../../assets/icon/logo_type_hijau_2018-06-22/drawable-xxxhdpi/logo_type_hijau.png')}
        style={{
          height: d.height * 27 / 680,
          width: d.width * 72 / 360,
          resizeMode: 'contain'
        }}
      />
      <TouchableOpacity style={{ position:'absolute', right: d.height * 30 / 680, top: d.height * 16 / 680, bottom: d.height * 16 / 680}}>
        <FontAwesome name="history" size={20} style={{ color: '#27ae60'}} />
      </TouchableOpacity>
    </View>
  )
}