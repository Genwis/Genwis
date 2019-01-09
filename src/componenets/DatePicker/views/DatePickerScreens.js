/**
* Created by iampamungkas on 2/13/18.
*/
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, TextInput, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import Axios from 'axios'
import Calendar from 'react-native-calendars/src/calendar/index'
import { selectDetail, idS } from '../../../actions/actions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'

const d = Dimensions.get('window')

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
})

export default class DatePickerScreens extends Component {

    constructor(props) {
        super(props);
        // console.log(props)
        // this.setState({ ...this.state, nav: })
        //this.sesuatu = this.sesuatu.bind(this);

    }

/*current={start.format('YYYY-MM-DD')}
minDate={now.format('YYYY-MM-DD')}
onDayPress={(day) => { this.onStartDateChange(day) }}
*/
    dayChange = (day) => {
        const nextState = this.props.detail
        console.log(nextState)
        if(nextState.chooseStartDate){
            const start = moment(`${day.year}-${day.month}-${day.day >= 10 ? day.day : `0${day.day}`}`, "YYYY-MM-DD")
            nextState.start = start.format("YYYY-MMM-DD")
            this.props.dispatch(selectDetail(nextState))
        }else{
            const finish = moment(`${day.year}-${day.month}-${day.day >= 10 ? day.day : `0${day.day}`}`, "YYYY-MM-DD")
            nextState.finish = finish.format("YYYY-MMM-DD")
            this.props.dispatch(selectDetail(nextState))
        }

        this.props.navigation.pop(2)
        this.props.navigation.push("DetailNavigation")
    }
    render() {
        const { detail, navigation } = this.props

        // console.log('props citypicker',this.props.detail)
        return (
            <View style={style.container}>
            <StatusBar backgroundColor="#229854" />
            <Calendar
              current='2018-01-03'
              minDate='2018-01-01'
              onDayPress={(day) => this.dayChange(day)}
              theme={{
                  backgroundColor: '#ffffff',
calendarBackground: '#ffffff',
textSectionTitleColor: '#000000',
selectedDayBackgroundColor: '#000000',
selectedDayTextColor: '#ffffff',
todayTextColor: '#00adf5',
dayTextColor: '#000000',
textDisabledColor: '#d9e1e8',
dotColor: '#00adf5',
selectedDotColor: '#ffffff',
arrowColor: '#27ae60',
monthTextColor: '#27ae60',
textDayFontFamily: 'monospace',
textMonthFontFamily: 'monospace',
textDayHeaderFontFamily: 'monospace',
textMonthFontWeight: 'bold',
                            textDayFontSize: 12,
                            textMonthFontSize: 12,
                            textDayHeaderFontSize: 12,
                        }}
            />
            </View>
        )
    }
}
