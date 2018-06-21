/**
 * Created by iampamungkas on 7/28/17.
 */

import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import Modal from 'react-native-modalbox'
import moment from 'moment'
import Calendar from 'react-native-calendars/src/calendar/index'
import Autocomplete from 'react-native-autocomplete-input'
import { selectDetail, isPreview } from '../../../actions/actions'
import Axios from 'axios'

export default class DetailScreenForm extends Component {
    state = {
      isOpen: false,
      currentStart: this.props.detail.start,
      currentEnd: this.props.detail.finish,
      budget: this.props.detail.budget,
      tags: {
        culture: false,
        outdoors: false,
        history: false,
        shopping: false,
        wildlife: false,
        beaches: false,
        mountain: false,
        museum: false,
        amusement: false,
        hidden_paradise: false,
      },
      list:[
        {city: "Bandung", state: "Jawa Barat", Country: "Indoneseia"},
        {city: "Bandongan",  state: "Jawa Tengah", Country: "Indoneseia"},
        {city: "Banten", state: "Banten", Country: "Indoneseia"},
      ],
      autocomplete:[],
      inputValue: ""
    }
    componentWillMount() {
      this.props.dispatch(isPreview(false))
      const nextState = this.props.detail
      const start = moment()
      nextState.start = start.format("YYYY-MMM-DD")
      nextState.finish = start.add(3, 'days').format("YYYY-MMM-DD")
      console.log(nextState)
      this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        currentStart: nextState.start,
        currentEnd: nextState.finish,
      })
    }
    onBudgetChange = (budget) => {
      const nextState = this.props.detail
      console.log(budget)
      nextState.budget = parseInt(budget)
      this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        budget,
      })
    }
    onStartDateChange(day) {
      const nextState = this.props.detail
      this.refs.modal1.close()
      const start = moment(`${day.year}-${day.month}-${day.day >= 10 ? day.day : `0${day.day}`}`, "YYYY-MM-DD")
      nextState.start = start.format("YYYY-MMM-DD")
      if (
        moment(nextState.finish, 'YYYY-MMM-DD').dayOfYear() - start.dayOfYear() < 3
      ) {
        nextState.finish = start.add(3, 'days').format("YYYY-MMM-DD")
      }
      console.log(nextState)
      this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        currentStart: nextState.start,
        currentEnd: nextState.finish,
      })
    }
    onEndDateChange(day) {
      const nextState = this.props.detail
      this.refs.modal2.close()
      const finish = moment(`${day.year}-${day.month}-${day.day >= 10 ? day.day : `0${day.day}`}`, "YYYY-MM-DD")
      nextState.finish = finish.format("YYYY-MMM-DD")
      this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        currentEnd: nextState.finish,
      })
    }
    onFilterChange = (tags) => {
      const nextState = this.props.detail
      nextState.tags = tags
      this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        tags: nextState.tags,
      })
    }
    onLocationChange = (item) => {
      const nextState = this.props.detail
      nextState.location_id = item.id
      this.props.dispatch(selectDetail(nextState))
      this.setState({ ...this.state, autocomplete: [], inputValue:""+item.city+", "+item.state})
    }
    onShowAutocomplete = (like) => {
      this.setState({ ...this.state, inputValue: like })
      const headers = {
        Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
        'Content-Type': 'text/plain',
      }
      Axios.get(`http://api.generatorwisata.com/api/locations/like?key=${like}`, { headers })
        .then((response) => {
          this.setState({ ...this.state, autocomplete: response.data})
        })
        .catch((err) => {
          console.log(err)
        })
    }
    render() {
      const { detail, navigation } = this.props
      const now = moment()
      const start = moment(detail.start, 'YYYY-MMM-DD')
      const finish = moment(detail.finish, 'YYYY-MMM-DD')
      return (
        <View style={parent}>
          <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={container1} >
              <StatusBar backgroundColor="#27ae60" />
              <View style={container2}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ resizeMode: 'contain', height: d.height * 0.15 }} source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />

                  <Text style={wonderfull} >
                              Enjoy your tour!
                  </Text>

                  <Text style={{ color: '#bdbdbd', fontFamily: 'Campton' }}>
                    Determine tour itinerary as you wish
                  </Text>
                </View>
                <Text style={cityDestination}>
                              City Destination
                </Text>
                {/*<TextInput placeholder="Bandung" style={margin1} underlineColorAndroid="#27ae60" />*/}
                <View style={{marginTop: 2,marginBottom: d. height * 22/ 360, flex: 1}}>
                  <Autocomplete
                    inputContainerStyle={{borderWidth: 0, margin: 0.5}}
                    containerStyle={autoCompleteContainer}
                    data={this.state.autocomplete}
                    value={this.state.inputValue}
                    placeholder="Bandung"
                    autoCapitalize="none"
                    autoCorrect={false}
                    hideResults={this.state.inputValue === ""}
                    onChangeText={text => this.onShowAutocomplete(text)}
                    style={margin1}
                    renderItem={(item)=>(
                      <TouchableOpacity  onPress={() => {
                        this.onLocationChange(item)}
                      }
                      >
                        <Text style={margin1}>{item.city}, {item.state}</Text>
                      </TouchableOpacity>
                    )
                    }
                  />
                </View>
                <Text style={budget}>
                              Budget per person
                </Text>
                <TextInput placeholder="1000000" style={margin1} underlineColorAndroid="grey" onChangeText={(budget) => this.onBudgetChange(budget)} keyboardType='numeric' />
                <Text style={{...timePeriod, marginTop: 0}}>
                  Itinerary Start
                </Text>
                <View style={datepick}>
                  <TouchableOpacity onPress={() => this.refs.modal1.open()}>
                    <View style={container3}>
                      <Text style={date}> {start.format('DD MMMM YYYY')}</Text>
                      <Image style={{ height: 21, resizeMode: 'contain', position: 'absolute', right: 0}} source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'grey', height: 1.5, marginLeft: 5 }} />
                <Text style={timePeriod}>
                  Itinerary End
                </Text>
                <View style={datepick}>
                  <TouchableOpacity onPress={() => this.refs.modal2.open()}>
                    <View style={container3}>
                      <Text style={date}> {finish.format('DD MMMM YYYY')}</Text>
                      <Image style={{ height: 21, resizeMode: 'contain', position: 'absolute', right: 0}} source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'grey', height: 1.5, marginLeft: 5 }} />
                <Text style={timePeriod}>Attraction Options</Text>
                <View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, culture: !this.state.tags.culture})}>
                    <View style={this.state.tags.culture ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.culture ? filterTextActive : filterTextPassive}>Culture</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, mountain: !this.state.tags.mountain})}>
                    <View style={this.state.tags.mountain ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.mountain ? filterTextActive : filterTextPassive}>Mountain</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, museum: !this.state.tags.museum})}>
                    <View style={this.state.tags.museum ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.museum ? filterTextActive : filterTextPassive}>Museum</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                
                <View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, outdoors: !this.state.tags.outdoors})}>
                    <View style={this.state.tags.outdoors ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.outdoors ? filterTextActive : filterTextPassive}>Outdoors</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, hidden_paradise: !this.state.tags.hidden_paradise})}>
                    <View style={this.state.tags.hidden_paradise ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.hidden_paradise ? filterTextActive : filterTextPassive}>Hidden Paradise</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, beaches: !this.state.tags.beaches})}>
                    <View style={this.state.tags.beaches ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.beaches ? filterTextActive : filterTextPassive}>Beaches</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                
                <View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, history: !this.state.tags.history})}>
                    <View style={this.state.tags.history ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.history ? filterTextActive : filterTextPassive}>History</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, wildlife: !this.state.tags.wildlife})}>
                    <View style={this.state.tags.wildlife ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.wildlife ? filterTextActive : filterTextPassive}>Wildlife</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, amusement: !this.state.tags.amusement})}>
                    <View style={this.state.tags.amusement ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.amusement ? filterTextActive : filterTextPassive}>Amusement</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                
              </View>
              <TouchableOpacity style={buttonGene} onPress={() => navigation.navigate('ListNavigation')}>
                <Text style={generateText}>GENERATE</Text>
              </TouchableOpacity>
            </View>
            <Modal
              isOpen={this.state.isOpen}
              onClosed={() => this.setState({ isOpen: false })}
              ref="modal1"
              style={modal}
              postion="center"
            >
              <View style={bar} />
              <View style={dateShow}>
                <Text style={day}>{start.format('DD')}</Text>
                <Text style={month}>{start.format('MMMM')}</Text>
                <Text style={year}>{start.format('YYYY')}</Text>
              </View>
              <Calendar
                current={start.format('YYYY-MM-DD')}
                minDate={now.format('YYYY-MM-DD')}
                onDayPress={(day) => { this.onStartDateChange(day) }}
                theme={{
                              textDayFontSize: 12,
                              textMonthFontSize: 12,
                              textDayHeaderFontSize: 12,
                          }}
              />
            </Modal>
            <Modal
              isOpen={this.state.isOpen}
              onClosed={() => this.setState({ isOpen: false })}
              ref="modal2"
              style={modal}
              postion="center"
            >
              <View style={bar} />
              <View style={dateShow}>
                <Text style={day}>{finish.format('DD')}</Text>
                <Text style={month}>{finish.format('MMMM')}</Text>
                <Text style={year}>{finish.format('YYYY')}</Text>
              </View>
              <Calendar
                minDate={start.format('YYYY-MM-DD')}
                current={finish.format('YYYY-MM-DD')}
                onDayPress={(day) => { this.onEndDateChange(day) }}
                theme={{
                              textDayFontSize: 12,
                              textMonthFontSize: 12,
                              textDayHeaderFontSize: 12,
                          }}
              />
            </Modal>
          </ScrollView>
        </View>
      )
    }
}
const d = Dimensions.get('window')
const filterButtonPassive = {
  paddingRight: 4,
  paddingLeft: 4,
  height: 31.3,
  borderRadius: 1.7,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor: "#e0e0e0"
}
const filterButtonActive = {
  paddingRight: 4,
  paddingLeft: 4,
  height: 31.3,
  borderRadius: 1.7,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor: "#27ae60"
}
const filterTextActive = {
  fontFamily: "Lato",
  fontSize: 13.3,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0.36,
  textAlign: "left",
  color: "#ffffff"
}
const filterTextPassive = {
  fontFamily: "Lato",
  fontSize: 13.3,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0.36,
  textAlign: "left",
  color: "#616161"
}

const wonderfull = {
  marginTop: 25,
  marginBottom: 11,
  fontFamily: 'MarkPro',
  fontSize: 24.2,
  letterSpacing: 0.1,
  textAlign: 'center',
  color: '#27ae60',
}
const bar = {
  backgroundColor: '#16a085',
  height: d.height * 0.03,
}

const day = {
  fontSize: 70,
  color: 'white',
}

const month = {
  fontSize: 25,
  color: 'white',
}

const year = {
  fontSize: 25,
  color: 'white',
}

const dateShow = {
  backgroundColor: '#1abc9c',
  alignItems: 'center',
}
const datepick = {
  flexDirection: 'row',
}
const modal = {
  height: d.height * 0.85,
  width: d.width * 0.7,
}
const parent = {
  flex: 1,
}
const container1 = {
  marginTop: d.height * 0.1,
  backgroundColor: '#ffffff',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
const container2 = {
  width: d.width * 0.8,
}
const margin2 = {
  marginBottom: 20,
}
const margin1 = {
  fontFamily: 'Poppins-Regular',
  fontSize: 20,
}
const date = {
  fontFamily: 'Poppins-Regular',
  fontSize: 18,
}
const setrip = {
  fontFamily: 'Poppins-Regular',
  fontSize: 30,
  marginRight: 10,
  marginLeft: 10,
}
const container3 = {
  marginTop: 5,
  flexDirection: 'row',
  width: d.width * 0.8,
}
const budget = {
  marginBottom: -10,
  marginLeft: 3,
  letterSpacing: 0.08,
  color: '#27ae60',
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  marginTop: 10,
}
const timePeriod = {
  marginBottom: -7,
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  color: '#27ae60',
  marginTop: 10,
}
const cityDestination = {
  marginTop: 30,
  marginBottom: -10,
  marginLeft: 3,
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  color: '#27ae60',
}
const enjoyYourTour = {
  fontFamily: 'Poppins-Regular',
  fontSize: 39.3,
  fontWeight: 'bold',
  letterSpacing: 0.2,
  textAlign: 'left',
  color: '#27ae60',
}
const buttonGene = {
  backgroundColor: '#27ae60',
  borderRadius: d.height * 0.07 / 2,
  width: d.width * 0.8,
  height: d.height * 0.07,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 25,
  marginBottom: 25,
}
const generateText = {
  color: 'white',
  fontFamily: 'Poppins-Regular',
  fontSize: 15,
  fontWeight: 'bold',
  letterSpacing: 0.1,
}

const autoCompleteContainer = {
  flex: 1,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 1
}
