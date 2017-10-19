/**
 * Created by iampamungkas on 9/11/17.
 */
'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  BydayScreenItem  from './BydayScreenItem'
import Swiper from 'react-native-swiper';

function mapStateToProps(state) {
    const { itineraryByDetail } = state
    const {
        isFetching,
        itinerary: List
    } = itineraryByDetail || {
        isFetching: true,
        itinerary: { }
    }

    return {
        List,
        isFetching
    }
}
class BydayScreenList extends Component {
    render(){
        const { items } = this.props
        const timeline = items.time_line;
        const attractions = this.props.List.attractions
        const list =  Object.values(timeline).map(function (event,index) {
            return (<BydayScreenItem item={attractions[event.todo.key]} event={event} key={index}/>)
        })
        return(
            <Swiper style={swiperStyle} loop={false}>
                { list }
            </Swiper>
        )
    }
}
export default connect(mapStateToProps)(BydayScreenList)
const container = {
    flex: 1,
    backgroundColor: "#ffffff"
}
const swiperStyle ={
    flex: 1,
    backgroundColor: "#ffffff"
}
const day = {
    width: 45.3,
    height: 17.3,
    fontFamily: "Ubuntu",
    fontSize: 19.3,
    fontWeight: "500",
    letterSpacing: 0.1,
    textAlign: "center",
    color: "#2ecc71"
};