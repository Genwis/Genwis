/**
 * Created by iampamungkas on 7/28/17.
 */

import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, StatusBar, TouchableOpacity, Image } from 'react-native'
import Modal from 'react-native-modalbox'
import Calendar from "react-native-calendars/src/calendar/index"
import {selectDetail} from '../../../actions/actions'
export default class DetailScreenForm extends Component {
    state = {
        isOpen: false,
        currentStart: ''+this.props.detail.start.year+'-'+(this.props.detail.start.month >10 ?this.props.detail.start.month:'0'+this.props.detail.start.month )+'-'+(this.props.detail.start.day >10 ?this.props.detail.start.day:'0'+this.props.detail.start.day),
        currentEnd: ''+this.props.detail.end.year+'-'+(this.props.detail.end.month >10 ?this.props.detail.end.month:'0'+this.props.detail.end.month )+'-'+(this.props.detail.end.day >10 ?this.props.detail.end.day:'0'+this.props.detail.end.day),
    }
    onStartDateChange(day) {
        const nextState = this.props.detail
        this.refs.modal1.close()
        nextState.start.day = day.day
        nextState.start.year = day.year
        nextState.start.month = day.month
        this.props.dispatch(selectDetail(nextState))
        this.setState({
            currentStart: ''+ nextState.start.year+'-'+( nextState.start.month >10 ? nextState.start.month:'0'+ nextState.start.month )+'-'+( nextState.start.day >10 ? nextState.start.day:'0'+ nextState.start.day),
        })
    }
    onEndDateChange(day) {
        const nextState = this.props.detail
        this.refs.modal2.close()
        nextState.end.day = day.day
        nextState.end.year = day.year
        nextState.end.month = day.month
        this.props.dispatch(selectDetail(nextState))
        this.setState({
            currentEnd: ''+ nextState.end.year+'-'+( nextState.end.month >10 ? nextState.end.month:'0'+ nextState.end.month )+'-'+( nextState.end.day >10 ? nextState.end.day:'0'+ nextState.end.day),
        })
    }
    render(){
        const { detail, navigation } =this.props
        return(
            <View style={parent}>
                <View style = {container1} >
                    <StatusBar backgroundColor="#2ecc71"/>
                    <View style={container2}>
                        <Text style={enjoyYourTour} >
                            Enjoy{"\n"}your tour!
                        </Text>
                        <Text style={cityDestination}>
                            City Destination
                        </Text>
                        <TextInput placeholder={detail.city} style={margin1} underlineColorAndroid="#2ecc71"/>
                        <Text style={OthercityDestination}>
                            Budget
                        </Text>
                        <TextInput placeholder={"5000000"} style={margin1} underlineColorAndroid="#2ecc71"/>
                        <Text style={OthercityDestination}>
                            Time Period
                        </Text>
                        <View style={datepick}>
                            <TouchableOpacity onPress={()=> this.refs.modal1.open() }>
                                <View style={container3}>
                                    <Image style={{width: 19, height: 21}} source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')}/>
                                    <Text style={date}> {detail.start.day} {bulan(detail.start.month)} {detail.start.year}</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={setrip}> - </Text>
                            <TouchableOpacity onPress={()=> this.refs.modal2.open()}>
                                <View style={container4}>
                                    <Image style={{width: 19, height: 21}} source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')}/>
                                    <Text style={date}> {detail.end.day} {bulan(detail.end.month)} {detail.end.year}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: '#2ecc71', height: 1.25}}/>
                    </View>
                    <TouchableOpacity style={buttonGene} onPress={() => navigation.navigate('ListNavigation')}>
                        <Text style={generateText}>GENERATE</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    isOpen={this.state.isOpen}
                    onClosed={() => this.setState({isOpen: false})}
                    ref={"modal1"}
                    style={modal}
                    postion={"center"}
                >
                    <View style={bar}/>
                    <View style={dateShow}>
                        <Text style={day}>{detail.start.day}</Text>
                        <Text style={month}>{bulan(detail.start.month)}</Text>
                        <Text style={year}>{detail.start.year}</Text>
                    </View>
                    <Calendar
                        current={this.state.currentStart}
                        onDayPress={(day) => {this.onStartDateChange(day)}}
                        theme={{
                            textDayFontSize: 12,
                            textMonthFontSize: 12,
                            textDayHeaderFontSize: 12
                        }}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.isOpen}
                    onClosed={() => this.setState({isOpen: false})}
                    ref={"modal2"}
                    style={modal}
                    postion={"center"}
                >
                    <View style={bar}/>
                    <View style={dateShow}>
                        <Text style={day}>{detail.end.day}</Text>
                        <Text style={month}>{bulan(detail.end.month)}</Text>
                        <Text style={year}>{detail.end.year}</Text>
                    </View>
                    <Calendar
                        minDate={this.state.currentStart}
                        current={this.state.currentEnd}
                        onDayPress={(day) => {this.onEndDateChange(day)}}
                        theme={{
                            textDayFontSize: 12,
                            textMonthFontSize: 12,
                            textDayHeaderFontSize: 12
                        }}
                    />
                </Modal>
            </View>
        )
    }
}
const d = Dimensions.get('window')

const bar = {
    backgroundColor: '#16a085',
    height: d.height * 0.03
}

const day = {
    fontSize: 70,
    color: "white"
}

const month = {
    fontSize: 25,
    color: "white"
}

const year = {
    fontSize: 25,
    color: "white"
}

const dateShow = {
    backgroundColor: '#1abc9c',
    alignItems: "center",
}
const datepick = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
}
const modal = {
    height : d.height * 0.85,
    width : d.width * 0.7,
}
const parent = {
    flex: 1
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}
const container2 = {
    width: d.width * 0.8,
}
const margin2 = {
    marginBottom: 20
}
const margin1 = {
    fontFamily: "Ubuntu",
    fontSize: 20,
}
const date = {
    fontFamily: "Ubuntu",
    fontSize: 18,
}
const setrip = {
    fontFamily: "Ubuntu",
    fontSize: 30,
    marginRight: 10,
    marginLeft: 10,
}
const container3 = {
    marginTop: 5,
    flexDirection: "row",
    marginRight: 1,
}
const container4 = {
    marginTop: 5,
    flexDirection: "row",
    marginLeft: 1,
}
const OthercityDestination = {
    fontFamily: "Ubuntu",
    fontSize: 20,
    letterSpacing: 0.08,
    color: "#b7bdbe"
}
const cityDestination = {
    marginTop: 30,
    
    fontFamily: "Ubuntu",
    fontSize: 20,
    letterSpacing: 0.08,
    color: "#b7bdbe"
}
const enjoyYourTour = {
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "left",
    color: "#2ecc71"
}
const buttonGene = {
    backgroundColor: "#2ecc71",
    borderRadius: 30,
    width: d.width * 0.8,
    height: d.height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
}
const generateText = {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.1,
}
function bulan(month) {
    switch (month){
        case 1:
            return "Jan"
        case 2:
            return "Feb"
        case 3:
            return "Mar"
        case 4:
            return "Apr"
        case 5:
            return "Mei"
        case 6:
            return "Jun"
        case 7:
            return "Jul"
        case 8:
            return "Agst"
        case 9:
            return "Sept"
        case 11:
            return "Oct"
        case 10:
            return "Nov"
        case 12:
            return "Des"
    }
}