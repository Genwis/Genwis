/**
 * Created by iampamungkas on 9/11/17.
 */
'use strict';
import React, { Component } from 'react'
import { View, Text, ScrollView, Button} from 'react-native'
import { connect } from 'react-redux'
import  BydayScreenItem  from './BydayScreenItem'

function mapStateToProps(state) {
    const { itineraryByDetail } = state;
    const {
        isFetching,
        itinerary: List
    } = itineraryByDetail || {
        isFetching: true,
        itinerary: { }
    };

    return {
        List,
        isFetching
    }
}
class BydayScreen extends Component {
    render(){
        const { params } = this.props.navigation.state;
        const timeline = params.items.time_line;
        const attractions = this.props.List.attractions;
        let Nday;
        const list =  Object.values(timeline).map(function (event,index) {
            Nday++;
            return (<BydayScreenItem item={attractions[event.todo.key]} event={event} key={index}/>)
        });
        return(
            <ScrollView horizontal={true} style={ScrollViewStyle}>
                { list }
            </ScrollView>
        )
    }
}
export default connect(mapStateToProps)(BydayScreen)
const ScrollViewStyle ={
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#ffffff"
}