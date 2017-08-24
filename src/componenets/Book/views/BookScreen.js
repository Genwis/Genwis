/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Button} from 'react-native'

export default class BookScreen extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <View style = {container1} >
                <Text style={enjoyYourTour} >
                    Book{"\n"}tour now!
                </Text>
                <Text style={cityDestination}>
                    Email
                </Text>
                <TextInput style={margin} underlineColorAndroid="#2ecc71"/>
                <Text style={cityDestination}>
                    No. Identity (KTP/Paspor/SIM)
                </Text>
                <TextInput style={margin1} underlineColorAndroid="#2ecc71"/>
                <View style={container2}>
                    <Button
                        color="#2ecc71" title="BOOK" onPress={() => navigation.navigate('BookScreenFinish')}
                    />
                </View>
            </View>
        )
    }
}

const container1 = {
    backgroundColor: "#ffffff",
    flex: 1,
};
const container2 = {
    backgroundColor: "#ffffff",
    marginLeft: 36,
    marginRight: 36,
}
const margin2 = {
    marginLeft: 36,
    marginRight: 36,
};
const margin1 = {
    marginLeft: 36,
    marginRight: 36,
    marginBottom: 20
};
const margin = {
    marginLeft: 36,
    marginRight: 36,
};
const cityDestination = {
    marginTop: 40,
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 20,
    letterSpacing: 0.08,
    color: "#b7bdbe"
};
const enjoyYourTour = {
    marginTop: 100,
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "left",
    color: "#2ecc71"
};