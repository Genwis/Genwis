/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Button, Image, TouchableOpacity,StatusBar} from 'react-native'
import TouchableItem from "../../../../node_modules/react-navigation/lib/views/TouchableItem";
export default class HomeScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        const { navigation } = this.props;
        return(
            <View  style={container1} >
                <StatusBar backgroundColor="#ffffff"/>
                <TouchableOpacity onPress={()=> navigation.navigate('DetailNavigation')}>
                    <View>
                        <View style={container2}>
                            <Image source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />
                            <Text style={wonderfull}>Welcome to Genwis !</Text>
                            <Text style={enjoy}>
                                Start your tour with your couple{"\n"}
                                and don’t forget to be happy
                            </Text>
                            <Text style={TAP}>TAP ANYWHERE TO START</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const TAP = {
    marginTop: 60,
    fontFamily: "Ubuntu",
    fontSize: 14,
    letterSpacing: 0.08,
    textAlign: "center",
    color: "#b7bdbe"
}
const container4 = {
    width: 164,
    height: 145.3
}
const container1 = {
    flex: 1,
    backgroundColor: "#ffffff"
}
const container2 = {
    marginTop: 150,
    alignItems: "center",
    justifyContent: 'center',
}
const container3 = {
    padding: 75
}
const wonderfull = {
    marginTop: 36,
    marginBottom: 22,
    fontFamily: "Ubuntu",
    fontSize: 24.2,
    fontWeight: "bold",
    letterSpacing: 0.1,
    textAlign: "center",
    color: "#2ecc71"
};
const enjoy = {
    fontFamily: "Cabin",
    fontSize: 18,
    letterSpacing: 0.08,
    textAlign: "center",
    color: "#b7bdbe"
};