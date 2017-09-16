/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Button, View, ToolbarAndroid} from 'react-native'
import ListScreenItems from './ListScreenItems'
export default class ListScreenForm extends Component {
    itinerary = this.props.List.itinerary;
    detail = this.props.Detail;
    navigation = this.props.navigation;
    render(){
        return(
            <ScrollView>
                <ToolbarAndroid
                    title="Timeline"
                    subtitle={toolbarSubtitile(this.itinerary, this.detail)}
                    titleColor="#ffffff"
                    subtitleColor="#ffffff"
                    style={Toolbar}
                />
                <ListScreenItems navigation={this.navigation} iten={this.itinerary}/>
            </ScrollView>
        )
    }
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
};
function bulan(month) {
    switch (month){
        case 1:
            return "Januari";
        case 2:
            return "Februari";
        case 3:
            return "Maret";
        case 4:
            return "April";
        case 5:
            return "Mei";
        case 6:
            return "Juni";
        case 7:
            return "Juli";
        case 8:
            return "Agustus";
        case 9:
            return "September";
        case 11:
            return "October";
        case 10:
            return "November";
        case 12:
            return "Desember"
    }
}

function toolbarSubtitile(iten, detail) {
    return (iten[0].waktu.day.toString()+" "+bulan(iten[0].waktu.month)+" "+iten[0].waktu.year.toString()+
    " - "+iten[iten.length-1].waktu.day.toString()+" "+bulan(iten[iten.length-1].waktu.month)+" "+iten[iten.length-1].waktu.year.toString()+
    " | "+detail.city)
}