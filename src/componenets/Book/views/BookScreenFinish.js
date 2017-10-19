/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict'
import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, Image, StatusBar, TouchableOpacity} from 'react-native'
export default class BookScreenFinish extends Component{
    onButPress = () => {
        const { navigation } = this.props
        const x = navigation.state
        x.routeName = 'BookScreen'
        navigation.state = x
        navigation.navigate('HomeScreen')
    }
    render(){
        const { navigation } = this.props
        console.log(navigation.state)
        return(
            <View style={container1}>
                <StatusBar backgroundColor="#2ecc71"/>
                <View style={container2}>
                    <Image style={image} source={require('../../../assets/icon/beach_2017-07-30/drawable-hdpi/beach.png')} />
                    <Text style={wonderfull}>Wonderful !</Text>
                    <Text style={enjoy}>
                        Enjoy your tour and don’t forget{"\n"}
                        to bring some foods and drinks
                    </Text>
                </View>
                <TouchableOpacity style={buttonBook} onPress={() => this.onButPress()}>
                    <Text style={bookText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const d = Dimensions.get("window")
const container4 = {
    width: 164,
    height: 145.3
}
const container1 = {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
}
const container2 = {
    alignItems: "center",
    justifyContent: 'center',
    width: d.width * 0.8,
    marginTop: d.height * 90/616
}
const buttonBook = {
    backgroundColor: "#2ecc71",
    borderRadius: 30,
    width: d.width * 0.4,
    height: d.height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    marginTop: d.height * 0.17,
}
const bookText = {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.1,
}
const image = {
    width: d.width * 0.5,
    resizeMode: "contain"
}
const wonderfull = {
    marginTop: 18,
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