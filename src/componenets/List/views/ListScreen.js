/**
 * Created by iampamungkas on 7/29/17.
 */
'use strict'
import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, StatusBar, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { fetchItineray } from '../../../actions/actions'

import ListScreenForm from "./ListScreenForm"
import ListScreenLoading from "./ListScreenLoading"
function mapStateToProps(state) {
    const { selectedDetail, itineraryByDetail } = state
    const {
        isFetching,
        itinerary: List
    } = itineraryByDetail || {
        isFetching: true,
        itinerary: { }
    }

    return {
        selectedDetail,
        List,
        isFetching
    }
}
class ListScreen extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {dispatch, selectedDetail} = this.props
        dispatch(fetchItineray(selectedDetail))
    }

    render(){
        const { isFetching, List, selectedDetail, navigation } = this.props
        return(

            <View style={container1}>
                <StatusBar backgroundColor="#2ecc71"/>
                {
                    isFetching ?  <ListScreenLoading/>: <ListScreenForm List={List} Detail={selectedDetail} navigation={navigation}/>
                }
                {
                    isFetching ? false :
                        <TouchableOpacity style={button} onPress={() => navigation.navigate('LoginNavigation')}>
                            <Text style={bookNowText}>BOOK NOW</Text>
                        </TouchableOpacity>
                }
            </View>
        )
    }
}
const d = Dimensions.get('window')

const bookNowText = {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.1,
}

const button = {
    width: d.width,
    height: d.height * 0.07,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center"
}

const container2={
    alignItems: "center"
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
}
export default connect(mapStateToProps)(ListScreen)