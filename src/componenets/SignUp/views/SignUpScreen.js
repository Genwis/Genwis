/**
 * Created by iampamungkas on 10/20/17.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, Text, TextInput, Button, TouchableOpacity, Image} from 'react-native'
import { register } from '../../../actions/userActions'

class SignUpScreen extends Component {
  state = {
    data: {
      username: "",
      password: "",
      retype: "",
    }
  }
  onChangeEmail = (text) => {
    // console.log(this.state.data)
    this.setState({
      data:{
        username: text,
        password: this.state.data.password,
        retype: this.state.data.retype
      }
    })
  }
  onChangePassword = (text) => {
    // console.log(this.state.data)
    this.setState({
      data:{
        username: this.state.data.username,
        password: text,
        retype: this.state.data.retype
      }
    })
  }
  onChangePasswordRetype = (text) => {
    // console.log(this.state.data)
    this.setState({
      data:{
        username: this.state.data.username,
        password: this.state.data.password,
        retype: text
      }
    })
  }
  onRegisterPress = () => {
    const { navigation } = this.props
    const { dispatch } = this.props
    if(this.state.data.username !== "" && this.state.data.password !== "" && this.state.data.password === this.state.data.retype) {
      dispatch(register({username: this.state.data.username, password: this.state.data.password}));
      setTimeout(function(){ navigation.navigate("DetailNavigation"); }, 2000);
    }
  }
    render(){
        const { navigation } = this.props
        return(
            <View style = {container1} >
                <View style={container2}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image style={{resizeMode: "contain", height: d.height * 0.15}} source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />
                    </View>
                    <Text style={wonderfull}>Create an account</Text>
                    <Text style={email}>
                        Email
                    </Text>
                    <TextInput onChangeText={(text) => this.onChangeEmail(text)} placeholder={"username@example.xyz"} style={inputan} underlineColorAndroid="#2ecc71"/>
                    <Text style={password}>
                        Password
                    </Text>
                    <TextInput onChangeText={(text) => this.onChangePassword(text)} secureTextEntry={true} placeholder={"••••••••••••"} style={inputan} underlineColorAndroid="#2ecc71"/>
					<Text style={password}>
                        Retype password
                    </Text>
                    <TextInput onChangeText={(text) => this.onChangePasswordRetype(text)} secureTextEntry={true} placeholder={"••••••••••••"} style={inputan} underlineColorAndroid="#2ecc71"/>
					
                </View>
                <TouchableOpacity style={buttonBook} onPress={() => this.onRegisterPress()}>
                    <Text style={bookText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps)(SignUpScreen)
const d = Dimensions.get("window")

const container1 = {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}
const container2 = {
    width: d.width * 0.8
}
const deft = {
	color:"#bdbdbd",
	fontFamily:"MarkPro",
	marginBottom: 7,
}
const buttonBook = {
    backgroundColor: "#2ecc71",
    borderRadius: d.height * 0.07/2,
    width: d.width * 0.8,
    height: d.height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
}
const buttonF = {
    backgroundColor: "#475993",
    borderRadius: 3.3,
    width: d.width * 0.6,
    height: d.height * 0.06,
    justifyContent: "center",
    alignItems: "center",
}
const fText = {
	color: "#fff",
	fontFamily: "MarkPro",

}
const bookText = {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.1,
}
const password = {
    marginBottom: -10,
    marginLeft: 3,
	marginTop: 10,
    fontFamily: "Campton",
    fontSize: 14,
    letterSpacing: 0.08,
    color: "#b7bdbe"
}
const email = {
    marginTop: 36,
    marginLeft: 3,
    marginBottom: -10,
    fontFamily: "Campton",
    fontSize: 14,
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
const inputan = {
    fontSize: 20,
    fontFamily: "Campton",
    color: "black",
    opacity: 0.87
}
const wonderfull = {
    marginTop: 25,
    marginBottom: 11,
    fontFamily: "MarkPro",
    fontSize: 24.2,
    letterSpacing: 0.1,
    textAlign: "center",
    color: "#2ecc71"
}
const enjoy = {
    fontFamily: "Cabin",
    fontSize: 14,
    letterSpacing: 0.08,
    textAlign: "center",
    color: "#b7bdbe"
}
