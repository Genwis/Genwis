/**
 * Created by iampamungkas on 7/30/17.
 */
import React, { Component } from 'react'
import {Text, View} from 'react-native'
export default class ListScreenLoading extends Component {
    render(){
        return(
            <View style={container1}>
                <Text style={loading}> LOADING! </Text>
            </View>
        )
    }
}
const container1 = {
    flex:1,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: 'center',
}

const loading = {
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "center",
    color: "#ffffff"
}