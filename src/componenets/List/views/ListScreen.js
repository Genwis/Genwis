/**
 * Created by iampamungkas on 7/29/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Button,StatusBar} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchItineray } from '../../../actions/actions'

import ListScreenForm from "./ListScreenForm";
import ListScreenLoading from "./ListScreenLoading"
function mapStateToProps(state) {
    const { selectedDetail, itineraryByDetail } = state;
    const {
        isFetching,
        itinerary: List
    } = itineraryByDetail || {
        isFetching: true,
        itinerary: { }
    };

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
        const {dispatch, selectedDetail} = this.props;
        dispatch(fetchItineray(selectedDetail))
    }

    render(){
        const { isFetching, List, selectedDetail, navigation } = this.props;
        return(

            <View style={container1}>
                <StatusBar backgroundColor="#2ecc71"/>
                {
                    isFetching ?  <ListScreenLoading/>: <ListScreenForm List={List} Detail={selectedDetail}/>
                }
                {
                    isFetching ? false :
                        <View style={button}>
                            <Button
                                color="#2ecc71" title="BOOK NOW" onPress={() => navigation.navigate('BookNavigation')}
                            />
                        </View>
                }
            </View>
        )
    }
}
const button = {
    padding: 10
}
const container2={
    alignItems: "center"
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
export default connect(mapStateToProps)(ListScreen)