/**
 * Created by iampamungkas on 9/13/17.
 */
import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import ListScreenTimeline from './ListScreenTimeline'

export default class ListScreenItems extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { iten, navigation } =  this.props
        let Nday = 0
        const list =  Object.values(iten).map(function (itinerary,index) {
            Nday++
            return (
                <View key={index}>
                    <ListScreenTimeline Day={itinerary} Nday={Nday}/>
                </View>
            )
        })
        return (<View>{list}</View>)
    }
}