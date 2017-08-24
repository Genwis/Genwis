/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Button, Image,StatusBar} from 'react-native'
export default class BookScreenFinish extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <View style={container1}>
                <StatusBar backgroundColor="#2ecc71"/>
                <View style={container2}>
                   <Image source={require('../../../assets/icon/beach_2017-07-30/drawable-hdpi/beach.png')} />
                    <Text style={wonderfull}>Wonderful !</Text>
                    <Text style={enjoy}>
                        Enjoy your tour and don’t forget{"\n"}
                        to bring some foods and drinks
                    </Text>
                </View>
                <View style={container3}>
                    <Button
                        color="#2ecc71" title="NEXT" onPress={() => navigation.navigate('HomeScreen')}
                    />
                </View>
            </View>
        )
    }
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
    marginTop: 100,
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