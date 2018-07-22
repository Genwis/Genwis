/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import bulan from '../../../helper/month'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class ListScreenTimeline extends Component {
  render() {
    const timeline = this.props.Day.events
    const traffic  = this.props.Day.traffic
    return (
      <View style={container1}>
        <View style={container3}>
          <View style={stylePadJam}>
            <Attr timeline={timeline} traffic={traffic}/>
          </View>
        </View>
      </View>
    )
  }
}

function Attr(props) {
  const {timeline, traffic} = props
  const edge = traffic ? Object.values(traffic) : false
  const showTime = timeline ? Object.values(timeline).map((val, n) => {
    console.log(edge[n])
    if (val) {
      return (
        <View key={n}>
          <View style={container4}>
            <Text style={attraction}>
              {val.attraction.name}
            </Text>
            <Text style={Jam}>
              {
                moment.parseZone(val.start).format('HH.mm')
              }
              {
                ' - '
              }
              {
                moment.parseZone(val.end).format('HH.mm')
              }
            </Text>
          </View>
          {
            (n < timeline.length - 1) ?
              <View style={container5}>
                <FontAwesome name="road" size={15} color="#3498db" />
                <Text style={edgy}>  {(edge[n].distance / 1000).toFixed(1)} KM  </Text>
                <FontAwesome style={{marginLeft: 20}} name="car" size={15} color="#3498db" />
                {edge[n].travel_time >= 3600 ? <Text style={edgy}>  {Math.floor(edge[n].travel_time / 3600)} H</Text> :false}
                {(edge[n].travel_time % 3600) !== 0 ? <Text style={edgy}>  {Math.floor((edge[n].travel_time % 3600) / 60)} Mnt  </Text> : false}
              </View>
              :
              false
          }
        </View>
      )
    }
  }) : false
  return (<View>{showTime}</View>)
}
const d = Dimensions.get('window')
const container1 = {
  width: d.width * 265 / 360,
}
const container2 = {
  backgroundColor: '#27ae60',
  height: 40,
}
const container3 = {
  flex: 1,
}
const container4 = {
  marginLeft: 20,
  marginRight: 70,
  marginTop: 15,
}
const container5 = {
  flexDirection: 'row',
  marginLeft: 20,
  marginRight: 70,
  marginTop: 15,
}
const attraction = {
  fontFamily: 'Poppins-Medium',
  fontSize: 14,
  letterSpacing: 0.95,
  textAlign: "left",
  color: "#424242"
}
const Days = {
  marginLeft: 5,
  marginTop: 6,
  fontFamily: 'Poppins-Regular',
  fontSize: 20,
  fontWeight: '500',
  letterSpacing: 0.06,
  color: '#fefefe',
}
const Jam = {
  fontFamily: 'Lato-Regular',
  fontSize: 12,
  fontWeight: "normal",
  letterSpacing: 0.32,
  color: "#757575"
}

const edgy = {
  fontFamily: 'Lato-Regular',
  fontSize: 12,
  color: '#3498db',
}
const stylePadJam = {
  marginBottom: d.width * 7 / 360,
}
