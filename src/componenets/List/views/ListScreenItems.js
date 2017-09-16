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
        onPress = (itinerary)=>{
            const { navigation } = this.props;
            navigation.navigate('BydayNavigation',{items: itinerary});
        }
        let Nday = 0;
        const list =  Object.values(iten).map(function (itinerary,index) {
            Nday++;
            return (
                <TouchableOpacity onPress={()=> onPress(itinerary)} key={index}>
                    <ListScreenTimeline Day={itinerary} Nday={Nday}/>
                </TouchableOpacity>
            )
        });
        return (<View>{list}</View>)
    }
}