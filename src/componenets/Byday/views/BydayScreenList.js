/**
 * Created by iampamungkas on 9/11/17.
 */


import React, { Component } from 'react'
import BydayScreenItem from './BydayScreenItem'
import Swiper from 'react-native-swiper'

export default class BydayScreenList extends Component {
  render() {
    const { items, Attractions } = this.props
    const timeline = items.time_line
    const list = Object.values(timeline).map((event, index) => (<BydayScreenItem item={Attractions[event.todo.key]} event={event} key={index} />))
    return (
      <Swiper style={swiperStyle} loop={false}>
        { list }
      </Swiper>
    )
  }
}

const container = {
  flex: 1,
  backgroundColor: '#ffffff',
}
const swiperStyle = {
  flex: 1,
  backgroundColor: '#ffffff',
}
const day = {
  width: 45.3,
  height: 17.3,
  fontFamily: 'Poppins-Regular',
  fontSize: 19.3,
  fontWeight: '500',
  letterSpacing: 0.1,
  textAlign: 'center',
  color: '#27ae60',
}
