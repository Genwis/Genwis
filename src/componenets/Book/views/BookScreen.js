/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict'
import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, TouchableOpacity, Image} from 'react-native'

export default class BookScreen extends Component{
    render(){
        const { navigation } = this.props
        return(
            <View style = {container1} >
                <View style={container2}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image style={{resizeMode: "contain", height: d.height * 0.15}} source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />
                    
                        <Text style={wonderfull} >
                            Book your tour now!
                        </Text>
						
						<Text style={{color:"#bdbdbd",fontFamily:"Campton"}}>
						Fill the form below to book your tour itinerary easily
						</Text>
					</View>

                    <Text style={email}>
                        Email
                    </Text>
                    <TextInput placeholder={"genwis@mailinator.com"} style={inputan} underlineColorAndroid="#2ecc71"/>
                    <Text style={KTP}>
                        No. Identity (KTP/Paspor/SIM)
                    </Text>
                    <TextInput placeholder={"10016416426457891267"} style={inputan} underlineColorAndroid="#2ecc71"/>
                </View>
                <TouchableOpacity style={buttonBook} onPress={() => navigation.navigate('BookScreenFinish')}>
                    <Text style={bookText}>BOOK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const d = Dimensions.get("window")
const wonderfull = {
    marginTop: 25,
    marginBottom: 11,
    fontFamily: "MarkPro",
    fontSize: 24.2,
    letterSpacing: 0.1,
    textAlign: "center",
    color: "#2ecc71"
}
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
	borderRadius: d.height * 0.07/2,
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
const KTP = {
    marginBottom: -10,
    marginLeft: 3,
fontFamily: "Campton",
    fontSize: 14,
    letterSpacing: 0.08,
    color: "#b7bdbe",
	marginTop: 10,
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
    fontFamily: "Ubuntu",
    color: "black",
    opacity: 0.87
}