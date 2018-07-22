/**
 * Created by iampamungkas on 7/30/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, Text, TextInput, Button, Image, TouchableOpacity, StatusBar, BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import TimerMixin from 'react-timer-mixin';
import Video from 'react-native-video'
import {login} from "../../../actions/actions";

const d = Dimensions.get('window')
class HomeScreen extends Component {
    static navigationOptions = {
      header: null,
    }
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
      const redirect = new Promise((resolve, reject) => {
        this.timer = TimerMixin.setTimeout(() => {resolve()}, 1000)
      })
        .then((result) => {
          const { navigation, users } = this.props
          navigation.navigate('DashboardNavigation')
        })
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
      TimerMixin.clearTimeout(this.timer)
    }
    onBackPress = () => {
      const { dispatch, state } = this.props.navigation
      if (state.routeName === 'Home') {
        BackHandler.removeEventListener()
        BackHandler.exitApp()
        return false
      }
      dispatch(NavigationActions.back())
      return true
    }
    render() {
      const { navigation, users } = this.props
      return (
        <View style={container1} >
          <StatusBar backgroundColor="#ffffff" />
          <View>
            <View style={container2}>
              <Video
                source={require('../../../assets/loading.mp4')} // Can be a URL or a local file.
                muted // Pauses playback entirely.
                resizeMode="cover" // Fill the whole screen at aspect ratio.*
                repeat
                style={video}
              />
            </View>
          </View>
        </View>
      )
    }
}
function mapStateToProps(state) {
  const { users } = state
  return {
    users,
  }
}
export default connect(mapStateToProps)(HomeScreen)
const TAP = {
  marginTop: 60,
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  textAlign: 'center',
  color: '#b7bdbe',
}
const container4 = {
  width: 164,
  height: 145.3,
}
const container1 = {
  flex: 1,
  backgroundColor: '#ffffff',
}
const container2 = {
  marginTop: 150,
  alignItems: 'center',
  justifyContent: 'center',
}
const container3 = {
  padding: 75,
}
const wonderfull = {
  marginTop: 36,
  marginBottom: 11,
  fontFamily: 'Poppins-Medium',
  fontSize: 24.2,
  letterSpacing: 0.1,
  textAlign: 'center',
  color: '#27ae60',
}
const enjoy = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  textAlign: 'center',
  color: '#b7bdbe',
}
const video = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'white',
  height: d.width * 0.8,
}
