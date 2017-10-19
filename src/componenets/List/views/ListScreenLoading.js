/**
 * Created by iampamungkas on 7/30/17.
 */
import React, { Component } from 'react'
import {Dimensions, Text, View, StatusBar} from 'react-native'
import Video from 'react-native-video'
export default class ListScreenLoading extends Component {
    render(){
        return(
            <View style={container}>
                <StatusBar backgroundColor="white"/>
                <Video source={require('../../../assets/loading.mp4')}   // Can be a URL or a local file.
                       muted={true}                            // Pauses playback entirely.
                       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                       repeat={true}
                       style={video}
                />
            </View>
        )
    }
}
const d = Dimensions.get('window')
const container = {
    height: d.height,
    width: d.width,
    alignItems: "center",
    justifyContent: "center"
}
const video = {
    position: "absolute",
    top: 0.27 * d.height,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    height: d.width * 0.6
}

const loading = {
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "center",
    color: "#ffffff"
}