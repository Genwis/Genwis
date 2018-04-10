/**
 * Created by iampamungkas on 10/20/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import { login } from '../../../actions/actions'

class LoginScreen extends Component {
    state = {
      data: {
        username: '',
        password: '',
      },
    }
    onChangeEmail = (text) => {
      // console.log(this.state.data)
      this.setState({
        data: {
          username: text,
          password: this.state.data.password,
        },
      })
    }
  onChangePassword = (text) => {
    // console.log(this.state.data)
    this.setState({
      data: {
        username: this.state.data.username,
        password: text,
      },
    })
  }
  onLoginPress = () => {
    const { navigation } = this.props
    const { dispatch } = this.props
    if (this.state.data.username !== '' && this.state.data.password !== '') {
      const signup = new Promise((resolve, reject) => {
        const x = dispatch(login(this.state.data))
        resolve(x)
      })
        .then((result) => {
          if (this.props.users.isLogin) {
            navigation.navigate('DashboardNavigation')
          } else {
            alert('Login Failed')
          }
        })
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={container1} >
        <View style={container2}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ resizeMode: 'contain', height: d.height * 0.15 }} source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />
          </View>
          <Text style={wonderfull}>Welcome to Genwis!</Text>
          <Text style={email}>
                        Username
          </Text>
          <TextInput onChangeText={text => this.onChangeEmail(text)} placeholder="myusername" style={inputan} underlineColorAndroid="#27ae60" autoCapitalize="none" />
          <Text style={password}>
                        Password
          </Text>
          <TextInput onChangeText={text => this.onChangePassword(text)} secureTextEntry placeholder="••••••••••••" style={inputan} underlineColorAndroid="#27ae60" />

        </View>
        <TouchableOpacity style={buttonBook} onPress={() => this.onLoginPress()}>
          <Text style={bookText}>Sign In</Text>
        </TouchableOpacity>
        <View style={{
marginTop: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20,
}}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={deft}>Haven't had an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpNavigation')}><Text style={{ color: '#27ae60', fontFamily: 'MarkPro' }}>Sign Up</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps)(LoginScreen)

const d = Dimensions.get('window')

const container1 = {
  backgroundColor: '#ffffff',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
const container2 = {
  width: d.width * 0.8,
}
const deft = {
  color: '#bdbdbd',
  fontFamily: 'MarkPro',
  marginBottom: 7,
}
const buttonBook = {
  backgroundColor: '#27ae60',
  borderRadius: d.height * 0.07 / 2,
  width: d.width * 0.8,
  height: d.height * 0.07,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
}
const buttonF = {
  backgroundColor: '#475993',
  borderRadius: 3.3,
  width: d.width * 0.6,
  height: d.height * 0.06,
  justifyContent: 'center',
  alignItems: 'center',
}
const fText = {
  color: '#fff',
  fontFamily: 'MarkPro',

}
const bookText = {
  color: 'white',
  fontFamily: 'Poppins-Regular',
  fontSize: 15,
  fontWeight: 'bold',
  letterSpacing: 0.1,
}
const password = {
  marginBottom: -10,
  marginLeft: 3,
  marginTop: 10,
  fontFamily: 'Campton',
  fontSize: 14,
  letterSpacing: 0.08,
  color: '#b7bdbe',
}
const email = {
  marginTop: 36,
  marginLeft: 3,
  marginBottom: -10,
  fontFamily: 'Campton',
  fontSize: 14,
  letterSpacing: 0.08,
  color: '#b7bdbe',
}
const enjoyYourTour = {
  fontFamily: 'Poppins-Regular',
  fontSize: 39.3,
  fontWeight: 'bold',
  letterSpacing: 0.2,
  textAlign: 'left',
  color: '#27ae60',
}
const inputan = {
  fontSize: 20,
  fontFamily: 'Campton',
  color: 'black',
  opacity: 0.87,
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
const enjoy = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  textAlign: 'center',
  color: '#b7bdbe',
}
