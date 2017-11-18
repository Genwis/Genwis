/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, TextInput, Button, View, ToolbarAndroid, TouchableOpacity, StatusBar} from 'react-native'
import ListScreenItems from './ListScreenItems'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import bulan from '../../../helper/month';
export default class ListScreenForm extends Component {
    itinerary = this.props.List.itinerary
    detail = this.props.Detail
    navigation = this.props.navigation
    render(){
        return(
            <View style={{flex: 1,backgroundColor:"#fefefe"}}>
                <StatusBar backgroundColor="#2ecc71"/>
                <View style={Toolbar}>
                    <Text style={timelineToolbarText}>
                        Timeline
                    </Text>
                    <Text style={subtitleToolbarText}>
                        {toolbarSubtitile(this.itinerary,this.detail)}
                    </Text>
                </View>
                <ScrollView contentContainerStyle={scrolViewStyle}>
                    <ListScreenItems navigation={this.navigation} iten={this.itinerary}/>
                </ScrollView>
                {/*<View style={bSpace}/>*/}
                <TouchableOpacity style={fab} onPress={()=> this.props.navigation.navigate("BydayNavigation")}>
                    <Icon name="list-ul" style={{fontSize: 25, color: "white"}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const d = Dimensions.get('window')
const bSpace = {
    width: 10,
    height: d.height,
    backgroundColor: '#2ecc71',
    position: 'absolute',
    right: 30
}
const fab = {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2ecc71',
    position: 'absolute',
    bottom: 200,
    right: -22,
    alignItems: "center",
    justifyContent: "center",
}


const scrolViewStyle = {
    /*marginLeft: d.width * 24/360,
	marginRight: d.width * 24/360,*/
	marginTop: d.width * 24/360,
	marginBottom: d.width * 24/360,
	paddingBottom: (d.height * 0.07)-24

}

const timelineToolbarText = {
    marginTop: 20,
    marginLeft: d.width * 24/360,
    fontFamily: "Ubuntu",
    fontSize: 18,
    letterSpacing: 0.15,
    color: "white",
}

const subtitleToolbarText = {
    marginLeft: d.width * 24/360,
    fontFamily: "Cabin",
    fontSize: 12,
    letterSpacing: 0.1,
    color: "white",
}

const Toolbar = {
    backgroundColor: "#2ecc71",
    height: 70
}
const Done = {
    fontFamily: "Ubuntu",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "center",
    color: "#2ecc71"
}


function toolbarSubtitile(iten, detail) {
    return (iten[0].waktu.day.toString()+" "+bulan(iten[0].waktu.month)+" "+iten[0].waktu.year.toString()+
    " - "+iten[iten.length-1].waktu.day.toString()+" "+bulan(iten[iten.length-1].waktu.month)+" "+iten[iten.length-1].waktu.year.toString()+
    " | "+detail.city)
}