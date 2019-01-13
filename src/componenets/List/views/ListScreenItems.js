/**
 * Created by iampamungkas on 9/13/17.
 */
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import ListScreenTimeline from './ListScreenTimeline'
import bulan from '../../../helper/month'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {idS,koorToMapa } from '../../../actions/actions'

function Items(props){
    const { items, traffic } = props
    const rowLen = items.length
    const edge = traffic ? Object.values(traffic) : false
    onPressItem = (aidi) => {
      props.dispatch(idS(aidi))
      props.navigation.navigate('DetailSearchNavigation')
    }
    onToMap = (name1,name2,koor1,koor2) => {
      var koor = {
        'item': [{
          'koor': {
            'longitude': parseFloat(koor1.longitude),
            'latitude': parseFloat(koor1.latitude),
          },
          'name': name1,
        },
        {
          'koor': {
            'longitude': parseFloat(koor2.longitude),
            'latitude': parseFloat(koor2.latitude),
          },
          'name': name2,
        }]
      }
      //var koor = "test"

      props.dispatch(koorToMapa(koor))
      // console.log(props)
      props.navigation.navigate('MapNavigation')
    }
    const list1 = Object.values(items).map((event, index) => {
      return ( <View key={index} style={view2}>
                  <View style={jamb}>
                      <Text style={jam}>{moment.parseZone(event.start).format('HH:mm')}</Text>
                      <Text style={jam}>-</Text>
                      <Text style={jam}>{moment.parseZone(event.end).format('HH:mm')}</Text>
                  </View>
                  <View style={dotandgar}>
                  <View style={bulet}/>
                  {(rowLen === index + 1) ? <View style={last}/> : <View style={notlast}/>}


                  </View>
                  <View style={detbox}>
                        <Text style={nama}>{event.attraction.name}</Text>
                        {(rowLen === index + 1) ? null : <TouchableOpacity onPress={()=>{this.onToMap(event.attraction.name,Object.values(items)[index+1].attraction.name,event.attraction.coordinate,Object.values(items)[index+1].attraction.coordinate)}}>
                              <View style={container5}>
                                <FontAwesome name="road" size={15} color="#3498db" />
                                <Text style={edgy}>  {(edge[index].distance / 1000).toFixed(1)} KM  </Text>
                                <FontAwesome style={{marginLeft: 20}} name="car" size={15} color="#3498db" />
                                {edge[index].travel_time >= 3600 ? <Text style={edgy}>  {Math.floor(edge[index].travel_time / 3600)} H</Text> :false}
                                {(edge[index].travel_time % 3600) !== 0 ? <Text style={edgy}>  {Math.floor((edge[index].travel_time % 3600) / 60)} Mnt  </Text> : false}
                              </View>

                            <Text style={direction}>See direction »</Text>
                            </TouchableOpacity>}

                  </View>
                </View> )
    })
    return(<View>{list1}</View>)
}
export default class ListScreenItems extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { iten, navigation, dispatch } = this.props
    //console.log('propsing listscreenitems')
    //console.log(this.props)
    // console.log('HIT')
    // console.log(JSON.stringify(iten.time_line))
    let Nday = 0
    const list = Object.values(iten.time_line).map((itinerary, index) => {
      Nday++
      const daym = moment(itinerary.time).format('dddd[,] DD MMMM')
      return ((itinerary.events === null) ? null :
      <View key={index} style={view1}>
      <Text style={tanggal}>{daym}</Text>
        <Items dispatch={dispatch} navigation={navigation} items={itinerary.events} traffic={itinerary.traffic}/>
      </View>
      )
    })
    return (<ScrollView contentContainerStyle={{}}>{list}</ScrollView>)
  }
}
const tanggal = {
    color: '#27ae60',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.52,
    marginBottom: 15
}
const view1 = {
    padding: 24,
    borderBottomColor: '#f1f3f9',
    borderBottomWidth: 5
}
const nama = {
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    letterSpacing: 0.86,
    lineHeight: 18
}
const jam = {
    fontFamily: 'Lato-Regular',
    fontSize: 13.3,
    letterSpacing: 0.76,
    color: '#424242',
    textAlign: 'center',
    lineHeight: 13.3,
    marginTop:2
}
const container5 = {
  flexDirection: 'row',
  marginTop: 15,
}
const edgy = {
  fontFamily: 'Lato-Regular',
  fontSize: 12,
  color: '#3498db',
}
const direction = {
    color: '#9e9e9e',
    fontFamily: 'Lato-Regular',
    fontSize: 12.7,
    letterSpacing:0.72,
    marginBottom: 15,
    marginTop: 5,
}
const view2 = {flexDirection:'row'}
const jamb = {paddingRight: 16}
const dotandgar = { alignItems: 'center' }
const bulet = {backgroundColor:'#ffffff',position: 'absolute', top: 2, zIndex: 2,borderColor:'#27ae60',borderWidth:1,width:11,height:11,borderRadius:24}
const last = {flex: 1, marginTop: 2,marginBottom:-2,backgroundColor: '#ffffff', width: 1.7}
const notlast = {flex: 1, marginTop: 2,marginBottom:-2,backgroundColor: '#eaf0fc', width: 1.7}
const detbox = { paddingLeft:19}
