/**
 * Created by iampamungkas on 10/20/17.
 */
import React, {Component} from 'react'
import { Dimensions, View, Text, TextInput, Button, TouchableOpacity, Image} from 'react-native'

export default class LoginScreen extends Component {
    render(){
        const { navigation } = this.props
        return(
            <View style = {container1} >
                <View style={container2}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image style={{resizeMode: "contain", height: d.height * 0.15}} source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />
                    </View>
                    <Text style={wonderfull}>Welcome to Genwis !</Text>
                    <Text style={enjoy}>
                        Start your tour with your couple{"\n"}
                        and don’t forget to be happy
                    </Text>
                    <Text style={email}>
                        Username
                    </Text>
                    <TextInput placeholder={"Fakhrul F"} style={inputan} underlineColorAndroid="#2ecc71"/>
                    <Text style={password}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} placeholder={"*********"} style={inputan} underlineColorAndroid="#2ecc71"/>
                </View>
                <TouchableOpacity style={buttonBook} onPress={() => navigation.navigate('BookNavigation')}>
                    <Text style={bookText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
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
const buttonBook = {
    backgroundColor: "#2ecc71",
    borderRadius: 30,
    width: d.width * 0.8,
    height: d.height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
    fontFamily: "Ubuntu",
    fontSize: 16,
    letterSpacing: 0.08,
    color: "#b7bdbe"
}
const email = {
    marginTop: 36,
    marginLeft: 3,
    marginBottom: -10,
    fontFamily: "Ubuntu",
    fontSize: 16,
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
    fontFamily: "Ubuntu",
    color: "black",
    opacity: 0.87
}
const wonderfull = {
    marginTop: 36,
    marginBottom: 11,
    fontFamily: "Ubuntu",
    fontSize: 24.2,
    fontWeight: "bold",
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