/**
 * Created by iampamungkas on 7/28/17.
 */

import React, { Component } from 'react'
import { View, Text, TextInput, Button, StatusBar, TouchableOpacity, Image } from 'react-native'
import Modal from 'react-native-modalbox'
import Calendar from "react-native-calendars/src/calendar/index";
import {selectDetail} from '../../../actions/actions'
export default class DetailScreenForm extends Component {
    state = {
        isOpen: false,
        currentStart: ''+this.props.detail.start.year+'-'+(this.props.detail.start.month >10 ?this.props.detail.start.month:'0'+this.props.detail.start.month )+'-'+(this.props.detail.start.day >10 ?this.props.detail.start.day:'0'+this.props.detail.start.day),
        currentEnd: ''+this.props.detail.end.year+'-'+(this.props.detail.end.month >10 ?this.props.detail.end.month:'0'+this.props.detail.end.month )+'-'+(this.props.detail.end.day >10 ?this.props.detail.end.day:'0'+this.props.detail.end.day),
    };
    onStartDateChange(day) {
        const nextState = this.props.detail;
        this.refs.modal1.close();
        nextState.start.day = day.day;
        nextState.start.year = day.year;
        nextState.start.month = day.month;
        this.props.dispatch(selectDetail(nextState));
        this.setState({
            currentStart: ''+ nextState.start.year+'-'+( nextState.start.month >10 ? nextState.start.month:'0'+ nextState.start.month )+'-'+( nextState.start.day >10 ? nextState.start.day:'0'+ nextState.start.day),
        });
    };
    onEndDateChange(day) {
        const nextState = this.props.detail;
        this.refs.modal2.close();
        nextState.end.day = day.day;
        nextState.end.year = day.year;
        nextState.end.month = day.month;
        this.props.dispatch(selectDetail(nextState));
        this.setState({
            currentEnd: ''+ nextState.end.year+'-'+( nextState.end.month >10 ? nextState.end.month:'0'+ nextState.end.month )+'-'+( nextState.end.day >10 ? nextState.end.day:'0'+ nextState.end.day),
        });
    };
    render(){
        const { detail, navigation } =this.props;
        return(
            <View style={parent}>
                <View style = {container1} >
                    <StatusBar backgroundColor="#2ecc71"/>
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
                                <Image source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')}/>
                                <Text style={date}> {detail.start.day} {bulan(detail.start.month)} {detail.start.year}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={date}> - </Text>
                        <TouchableOpacity onPress={()=> this.refs.modal2.open()}>
                            <View style={container3}>
                                <Image source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')}/>
                                <Text style={date}> {detail.end.day} {bulan(detail.end.month)} {detail.end.year}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={container2}>
                        <Button
                            color="#2ecc71" title="GENERATE" onPress={() => navigation.navigate('ListNavigation')}
                        />
                    </View>
                </View>
                <Modal
                    isOpen={this.state.isOpen}
                    onClosed={() => this.setState({isOpen: false})}
                    ref={"modal1"}
                    style={modal}
                    postion={"center"}
                >
                    <View style={container3}>
                        <Text style={date}>{detail.start.day} {bulan(detail.start.month)} {detail.start.year} - {detail.end.day} {bulan(detail.end.month)} {detail.end.year}</Text>
                    </View>
                    <Calendar
                        current={this.state.currentStart}
                        onDayPress={(day) => {this.onStartDateChange(day)}}
                    />
                </Modal>
                <Modal
                    isOpen={this.state.isOpen}
                    onClosed={() => this.setState({isOpen: false})}
                    ref={"modal2"}
                    style={modal}
                    postion={"center"}
                >
                    <View style={container3}>
                        <Text style={date}>{detail.start.day} {bulan(detail.start.month)} {detail.start.year} - {detail.end.day} {bulan(detail.end.month)} {detail.end.year}</Text>
                    </View>
                    <Calendar
                        current={this.state.currentEnd}
                        onDayPress={(day) => {this.onEndDateChange(day)}}
                    />
                </Modal>
            </View>
        )
    }
}
const datepick = {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
}
const modal = {
    height : 400,
}
const parent = {
    flex: 1
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
const container2 = {
    padding: 36,
    marginTop:20,
};
const margin2 = {
    marginLeft: 36,
    marginRight: 36,
    marginBottom: 20
};
const margin1 = {
    fontFamily: "Ubuntu",
    fontSize: 20,
    marginLeft: 36,
    marginRight: 36,
};
const date = {
    fontFamily: "Ubuntu",
    fontSize: 20,
}
const container3 = {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
};
const OthercityDestination = {
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 20,
    letterSpacing: 0.08,
    color: "#b7bdbe"
};
const cityDestination = {
    marginTop: 30,
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 20,
    letterSpacing: 0.08,
    color: "#b7bdbe"
};
const enjoyYourTour = {
    marginTop: 90,
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "left",
    color: "#2ecc71"
};
function bulan(month) {
    switch (month){
        case 1:
            return "Januari";
        case 2:
            return "Februari";
        case 3:
            return "Maret";
        case 4:
            return "April";
        case 5:
            return "Mei";
        case 6:
            return "Juni";
        case 7:
            return "Juli";
        case 8:
            return "Agustus";
        case 9:
            return "September";
        case 11:
            return "October";
        case 10:
            return "November";
        case 12:
            return "Desember"
    }
}