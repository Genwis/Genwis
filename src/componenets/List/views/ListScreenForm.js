/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, TextInput, Button, View, ToolbarAndroid, TouchableOpacity, StatusBar } from 'react-native'
import ListScreenItems from './ListScreenItems'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import moment from 'moment'

export default class ListScreenForm extends Component {
    itinerary = this.props.List.itinerary
    detail = this.props.Detail
    navigation = this.props.navigation
    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
          <View style={Toolbar}>
            <Text style={timelineToolbarText}>
                        Timeline
            </Text>
            <Text style={subtitleToolbarText}>
              {toolbarSubtitile(this.itinerary)}
            </Text>
            <TouchableOpacity style={{ position:'absolute', right: d.height * 30 / 680, top: d.height * 25 / 680}}>
              <Icon2 name="md-more" size={20} style={{ color: '#ffffff'}} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={scrolViewStyle}>
            <ListScreenItems navigation={this.navigation} iten={this.itinerary} />
          </ScrollView>
          {/* <View style={bSpace}/> */}
          <TouchableOpacity style={fab} onPress={() => this.props.navigation.navigate('BydayNavigation')}>
            <Icon name="list-ul" style={{ fontSize: 25, color: '#27ae60' }} />
          </TouchableOpacity>
        </View>
      )
    }
}

const d = Dimensions.get('window')
const bSpace = {
  width: 10,
  height: d.height,
  backgroundColor: '#27ae60',
  position: 'absolute',
  right: 30,
}
const fab = {
  elevation: 12,
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 200,
  right: -22,
  alignItems: 'center',
  justifyContent: 'center',
}


const scrolViewStyle = {
  /* marginLeft: d.width * 24/360,
	marginRight: d.width * 24/360, */
  marginTop: d.width * 24 / 360,
  marginBottom: d.width * 24 / 360,
  paddingBottom: (d.height * 0.07) - 24,

}

const timelineToolbarText = {
  marginLeft: 10,
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  letterSpacing: 0.59,
  textAlign: "left",
  color: "#ffffff"
}

const subtitleToolbarText = {
  marginLeft: 10,
  fontFamily: 'Poppins-Regular',
  fontSize: 12,
  fontWeight: "normal",
  letterSpacing: 0.32,
  textAlign: "left",
  color: "#ffffff"
}

const Toolbar = {
  height: d.height * 70 / 680,
  backgroundColor: "#27ae60",
  padding: d.height * 10 / 680,
}
const Done = {
  fontFamily: 'Poppins-Regular',
  fontSize: 20,
  fontWeight: 'bold',
  letterSpacing: 0.2,
  textAlign: 'center',
  color: '#27ae60',
}


function toolbarSubtitile(iten) {
  return `${moment(iten.detail.start).format('D MMMM')} - ${moment(iten.detail.finish).format('D MMMM YYYY')} ${iten.detail.location.city}`
}
