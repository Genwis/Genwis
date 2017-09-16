/**
 * Created by iampamungkas on 9/12/17.
 */
import React, { Component } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import Modal from 'react-native-modalbox'

export default class BydayScreenItem extends Component{
    constructor(props){
        super(props)
    }
    state = {
        isOpen: false,
    };
    render(){
        const { item, event } = this.props;
        return(
            <View style={parent}>
                <View style={container}>
                    <Image source={require('../../../assets/this_aint_no_mac-wallpaper-1440x900.jpg')} style={ImageStyle}/>
                    <Text style={AttractionsName}>{item.name}</Text>
                    <Text style={EventTime}>{fWaktu(event)}</Text>
                    <Text>{item.vicinity}</Text>
                    <View style={RatingandPrice}>
                        <Text>{item.rating}</Text>
                        <Text>Price  IDR 200.000</Text>
                    </View>
                    <Text ELLIPSIZEMODE={"tail"} numberOfLines={4} onPress={()=>this.refs.modal1.open()}>{item.description}</Text>
                </View>
                <Modal
                    isOpen={this.state.isOpen}
                    onClosed={() => this.setState({isOpen: false})}
                    ref={"modal1"}
                    style={modal}
                    postion={"center"}
                >
                    <View>
                        <Image source={require('../../../assets/this_aint_no_mac-wallpaper-1440x900.jpg')} style={ImageStyle}/>
                        <Text style={AttractionsName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </Modal>
            </View>
        )
    }
}

const fWaktu = (event)=>{
    const jamS = event.start.jam + 1;
    const menS = event.start.menit >=10 ? event.start.menit : 0+event.start.menit;
    let menF = event.todo.recommended_duration - (60 - event.start.menit);
    const jamF = event.start.jam + event.todo.recommended_duration / 60;
    menF = menF % 60;
    return(jamS+"."+menS+"-"+jamF+"."+menF)
}

const dimension = Dimensions.get('window')

const modal = {
    height:500,
}
const parent = {
    width: dimension.width
}
const container = {
    width:320,
    marginRight: 36,
    marginLeft: 36,
    marginTop: 83
}
const RatingandPrice = {
    flexDirection: "row",
    width: 290
}
const ImageStyle = {
    width: 240,
    height: 170
}
const AttractionsName = {
    width: 134.3,
    height: 15.7,
    fontFamily: "Ubuntu",
    fontSize: 16,
    letterSpacing: 0.08,
    textAlign: "center",
    color: "#2ecc71"
};
const EventTime = {
    width: 72.3,
    height: 9.7,
    fontFamily: "Cabin",
    fontSize: 12.6,
    letterSpacing: 0.06,
    textAlign: "center",
    color: "#bcc2c3"
};
