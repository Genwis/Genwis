/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import bulan from '../../../helper/month'
import moment from 'moment'

export default class ListScreenTimeline extends Component {
  render() {
    const timeline = this.props.Day.events
    return (
      <View style={container1}>
        <View style={container3}>
          <View style={stylePadJam}>
            <Attr timeline={timeline} />
          </View>
        </View>
      </View>
    )
  }
}
function Meniter(jm, mn, mnn) {
  const tmnt = mn + mnn
  const mnts = tmnt % 60
  const jms = (jm + (tmnt / 60)).toFixed(0)

  return ((jms < 10) ?
    <Text style={Jam}>
									0{jms}.{(mnts < 10) ? <Text style={Jam}>0{mnts}</Text> : <Text style={Jam}>{mnts}</Text>}
    </Text>
    :
    <Text style={Jam}>{jms}.{(mnts < 10) ? <Text style={Jam}>0{mnts}</Text> : <Text style={Jam}>{mnts}</Text>}
    </Text>)
}
function Attr(timeline) {
  const showTime = Object.values(timeline).map((isi, id) => {
    if (isi) {
      const timeShow = isi.map((val, n) => (
        <View key={n} style={container4}>
          <Text style={attraction}>
            {val.attraction.name}
          </Text>
          <Text style={Jam}>
            {
              moment(val.start).format('hh-mm')
            }
            {
              ' - '
            }
            {
              moment(val.end).format('hh-mm')
            }
          </Text>
        </View>
      ))
      return (<View key={id}>{timeShow}</View>)
    }
  })
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
const attraction = {
  fontFamily: 'MarkPro',
  fontSize: 14,
  letterSpacing: 0,
  color: '#5c5c5c',
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
  fontFamily: 'Campton-Book',
  fontSize: 12,
  letterSpacing: 0.06,
  color: '#757575',
}
const stylePadJam = {
  marginBottom: d.width * 7 / 360,
}
