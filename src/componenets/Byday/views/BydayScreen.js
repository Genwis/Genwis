/**
 * Created by iampamungkas on 10/20/17.
 */
import React, {Component} from 'react';
import {Dimensions, View, TouchableOpacity, Text} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions }  from 'react-navigation'
import BydayScreenList from './BydayScreenList'

function mapStateToProps(state) {
    const { selecetedDetail, itineraryByDetail } = state
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
class BydayScreen extends Component {
    state = {
        day: 0,
    }
    onPlus = () => {
        const {List} = this.props
        this.state.day !== List.itinerary.length -1 ?
        this.setState({
            day: this.state.day + 1
        }) : false
    }
    onMin = () => {
        this.state.day !== 0 ?
        this.setState({
            day: this.state.day - 1
        }) : false
    }
    render() {
        const {dispatch, List, navigation} = this.props
        return (
            <View style={{flex: 1, backgroundColor: "white"}}>
                <View style={bar}>
                    <TouchableOpacity style={{marginLeft: 1}} onPress={()=> this.onMin()}>
                        <Icon name="arrow-left" style={{fontSize: 30, color: "#2ecc71"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: d.width * 0.7}} onPress={()=> this.onPlus()}>
                        <Icon name="arrow-right" style={{fontSize: 30, color: "#2ecc71"}}/>
                    </TouchableOpacity>
                </View>
                <Text style={day}> Day {this.state.day+1}</Text>
                <View style={{flex:1}}>
                    <BydayScreenList items={List.itinerary[this.state.day]}/>
                </View>
                <TouchableOpacity style={button} onPress={() => navigation.navigate('LoginNavigation')}>
                    <Text style={bookNowText}>BOOK NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={fab} onPress={()=> dispatch(NavigationActions.back())}>
                    <Icon name="clock-o" style={{fontSize: 25, color: "white"}}/>
                </TouchableOpacity>
            </View>
        );
    }
}


export default connect(mapStateToProps)(BydayScreen)

const d = Dimensions.get("window")

const bar  = {
    flexDirection: "row",
    backgroundColor: "white",
    height: d.height * 0.08,
    width: d.width,
    alignItems: "center",
    justifyContent: "center"
}

const day = {
    color: "#2ecc71",
    fontFamily: "Ubuntu",
    fontSize: 19.3,
    fontWeight: "500",
    letterSpacing: 0.1,
    marginLeft: 50
}
const bookNowText = {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.1,
}

const button = {
    bottom: 0,
    width: d.width,
    height: d.height * 0.07,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center"
}

const fab = {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2ecc71',
    position: 'absolute',
    bottom: 250,
    left: -22,
    alignItems: "center",
    justifyContent: "center",
}