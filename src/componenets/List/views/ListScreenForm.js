/**
 * Created by iampamungkas on 7/29/17.

  <View style={bSpace}/>
 <TouchableOpacity style={fab} onPress={() => this.props.navigation.navigate('BydayNavigation')}>
   <Icon name="list-ul" style={{ fontSize: 25, color: '#27ae60' }} />
 </TouchableOpacity>
 <TouchableOpacity style={fab} onPress={() => goToMap()}>
   <Icon3 name="arrow-back" style={{ fontSize: 25, color: '#424242' }} />
 </TouchableOpacity>
 */
import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, TextInput, Button, View, ToolbarAndroid, TouchableOpacity, StatusBar } from 'react-native'
import ListScreenItems from './ListScreenItems'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import Icon3 from 'react-native-vector-icons/MaterialIcons'


export default class ListScreenForm extends Component {
    itinerary = this.props.List.itinerary
    //detail = this.props.Detail
    navigation = this.props.navigation
    dispatch = this.props.dispatch

    render() {
        // console.log(this.props.Detail)
      //const { navigation } = this.props
      //console.log('propsing listscreenform')
      //console.log('tesss')
      //console.log(this.props.navigation)
      // <TouchableOpacity style={{ position:'absolute', right: d.height * 30 / 680, top: d.height * 25 / 680}}>
      //   <Icon2 name="md-more" size={20} style={{ color: '#ffffff'}} />
      // </TouchableOpacity>
      //
      // <TouchableOpacity style={fab} onPress={() => goToMap()}>
      //   <Icon3 name="arrow-back" style={{ fontSize: 25, color: '#424242' }} />
      // </TouchableOpacity>
      goToMap = () =>{
        // console.log('gotomap')
        //console.log(this.navigation)
        //console.log(this.props.navigation)
        //console.log(this.props.navigation)
        //console.log(navigation)
        //console.log(props.navigation)
        this.navigation.navigate('MapNavigation')
      }
      // console.log("CALLED LISTSCREENFORM")
      // console.log('nyari',this.itinerary)
      // {toolbarSubtitile(this.itinerary)}
      return (
        <View style={view}>
          <View style={Toolbar}>
            <Text style={timelineToolbarText}>
                        Timeline
            </Text>
            <View style={view1}>
            <Text style={subtitleToolbarText}>
            {moment(this.itinerary.detail.start).format('D MMMM[ - ]')}
            {moment(this.itinerary.detail.finish).format('D MMMM YYYY')}
            </Text><Text style={batas}> | </Text>
            <Text style={subtitleToolbarText}>
            {this.itinerary.detail.location.city}
             </Text>
             </View>

          </View>

            <ListScreenItems dispatch={this.dispatch} navigation={this.navigation} iten={this.itinerary} />


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
// const fab = {
//   elevation: 12,
//   width: 60,
//   height: 60,
//   borderRadius: 30,
//   backgroundColor: 'white',
//   position: 'absolute',
//   bottom: 200,
//   right: -22,
//   alignItems: 'center',
//   justifyContent: 'center',
// }

const view = { flex: 1, backgroundColor: '#ffffff' }
const scrolViewStyle = {
  /* marginLeft: d.width * 24/360,
	marginRight: d.width * 24/360, */
  marginTop: d.width * 24 / 360,
  marginBottom: d.width * 24 / 360,
  paddingBottom: (d.height * 0.07) - 24,

}

const timelineToolbarText = {
  // marginLeft: 10,
  fontFamily: 'Poppins-Medium',
  fontSize: 16,
  letterSpacing: 0.59,
  textAlign: "left",
  color: "#ffffff"
}

const subtitleToolbarText = {
  // marginLeft: 10,
  fontFamily: 'Poppins-Regular',
  fontSize: 12,
  fontWeight: "normal",
  letterSpacing: 0.34,
  textAlign: "left",
  color: "#ffffff",
  marginTop:-3
}

const Toolbar = {
  backgroundColor: "#27ae60",
  paddingLeft: 23,
  paddingRight: 23,
  paddingTop: 13,
  paddingBottom: 14,
}
const Done = {
  fontFamily: 'Poppins-Regular',
  fontSize: 20,
  fontWeight: 'bold',
  letterSpacing: 0.2,
  textAlign: 'center',
  color: '#27ae60',
}
const fab = {
  elevation: 12,
  width: 40,
  height: 40,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  top: 24,
  left: 24,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 39,
}
const view1 = {flexDirection:'row'}
const batas = {  fontFamily: 'Poppins-Regular',
  fontSize: 12,
  fontWeight: "normal",
  letterSpacing: 0.34,
  textAlign: "left",
  color: "#ffffff",
  marginTop:-3,
  marginLeft: 10,
  marginRight: 10,
}
