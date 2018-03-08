/**
 * Created by iampamungkas on 10/20/17.
 */
import React, { Component } from 'react'
import { Dimensions, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'
import BydayScreenList from './BydayScreenList'

function mapStateToProps(state) {
  const { itineraryByDetail } = state
  const {
    isFetching,
    itinerary,
    shownItinerary,
  } = itineraryByDetail || {
    isFetching: true,
    itinerary: { },
  }

  return {
    itinerary,
    isFetching,
    shownItinerary
  }
}
class BydayScreen extends Component {
    state = {
      day: 0,
    }
    onPlus = () => {
      const { itinerary, shownItinerary  } = this.props
      const List = itinerary[shownItinerary]
      this.state.day !== List.itinerary.length - 1 ?
        this.setState({
          day: this.state.day + 1,
        }) : false
    }
    onMin = () => {
      this.state.day !== 0 ?
        this.setState({
          day: this.state.day - 1,
        }) : false
    }
    render() {
      const { dispatch, itinerary, navigation, shownItinerary } = this.props
      const List = itinerary[shownItinerary]
      console.log('xxxxxx')
      console.log(List)
      return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
          <View style={bar}>
            <TouchableOpacity style={{ marginLeft: 1 }} onPress={() => this.onMin()}>
              <Icon name="arrow-left" style={{ fontSize: 30, color: '#27ae60' }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: d.width * 0.7 }} onPress={() => this.onPlus()}>
              <Icon name="arrow-right" style={{ fontSize: 30, color: '#27ae60' }} />
            </TouchableOpacity>
          </View>
          <Text style={day}> Day {this.state.day + 1}</Text>
          <View style={{ flex: 1 }}>
            <BydayScreenList items={List.itinerary[this.state.day]} Attractions={List.attractions}/>
          </View>
          <TouchableOpacity style={button} onPress={() => navigation.navigate('BookNavigation')}>
            <Text style={bookNowText}>BOOK NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={fab} onPress={() => dispatch(NavigationActions.back())}>
            <Icon name="clock-o" style={{ fontSize: 25, color: '#27ae60' }} />
          </TouchableOpacity>
        </View>
      )
    }
}


export default connect(mapStateToProps)(BydayScreen)

const d = Dimensions.get('window')

const bar = {
  flexDirection: 'row',
  backgroundColor: 'white',
  height: d.height * 0.08,
  width: d.width,
  alignItems: 'center',
  justifyContent: 'center',
}

const day = {
  color: '#27ae60',
  fontFamily: 'Poppins-Regular',
  fontSize: 19.3,
  fontWeight: '500',
  letterSpacing: 0.1,
  marginLeft: 50,
}
const bookNowText = {
  color: 'white',
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  fontWeight: 'bold',
  letterSpacing: 0.1,
}

const button = {
  bottom: 0,
  width: d.width,
  height: d.height * 0.07,
  backgroundColor: '#27ae60',
  alignItems: 'center',
  justifyContent: 'center',
}

const fab = {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 250,
  left: -22,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 1,
}
