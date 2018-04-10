/**
 * Created by iampamungkas on 2/16/18.
 */
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
  insideContainer: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  textKet: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#bdbdbd',
  },
  textEmpty: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: '#616161',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonGenerate: {
    backgroundColor: '#27ae60',
    borderRadius: d.height * 0.07 / 2,
    width: d.width * 0.35,
    height: d.height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  generateText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'white',
  },
})
export default class extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#27ae60" />
        <ScrollView>
          <View style={style.insideContainer}>
            <Image style={{ resizeMode: 'contain', height: d.height * 100 / 650 }} source={require('../../../../assets/icon/group_12.png')} />
            <Text style={style.textEmpty}>
              Whoops.. it's empty !
            </Text>
            <Text style={style.textKet}>
              You have no Itinerary yet.{'\n'}
              Create your own Itinerary Now!
            </Text>
            <TouchableOpacity style={style.buttonGenerate} onPress={() => navigation.navigate('DetailNavigation')}>
              <Text style={style.generateText}>GENERATE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
