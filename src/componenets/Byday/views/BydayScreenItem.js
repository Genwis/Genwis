/**
 * Created by iampamungkas on 9/12/17.
 */
import React, { Component } from 'react'
import { View, Image, Text, Dimensions, ScrollView } from 'react-native'
import Modal from 'react-native-modalbox'

export default class BydayScreenItem extends Component{
    constructor(props){
        super(props)
    }
    state = {
        isOpen: false,
    }
    render(){
        const { item, event } = this.props
        return(
            <View style={parent}>
                <View style={container}>
                    <Image source={require('../../../assets/this_aint_no_mac-wallpaper-1440x900.jpg')} style={ImageStyle}/>
                    <Text style={AttractionsName}>{item.name}</Text>
                    <View style={row1}>
                        <Image style={sizeIcon} source={require('../../../assets/icon/clock_2017-09-18/drawable-xxxhdpi/clock.png')}/>
                        <Text style={EventTime}>  {fWaktu(event)}</Text>
                    </View>
                    <View style={row1}>
                        <Image style={sizeIcon} source={require('../../../assets/icon/placeholder_3_2017-09-18/drawable-xxxhdpi/placeholder_3.png')}/>
                        <Text style={Vicinity} ELLIPSIZEMODE={"tail"} numberOfLines={2} >  {item.vicinity}</Text>
                    </View>
                    <View style={line1}></View>
                    <View style={RatingandPrice}>
                        <Text style={RatingText}>  {item.rating} Star     </Text>
                        <View style={VerLine}></View>
                        <Text style={PriceText}>     Price  IDR 200.000</Text>
                    </View>
                    <View style={line2}></View>
                    <Text style={Description} ELLIPSIZEMODE={"tail"} numberOfLines={4} onPress={()=>this.refs.modal1.open()}>{item.description}</Text>
                    <View style={line3}></View>
                </View>
                <Modal
                    isOpen={this.state.isOpen}
                    onClosed={() => this.setState({isOpen: false})}
                    ref={"modal1"}
                    style={modal}
                    postion={"center"}
                >
                    <ScrollView>
                        <Image source={require('../../../assets/this_aint_no_mac-wallpaper-1440x900.jpg')} style={ImageStyle}/>
                        <Text style={AttractionsName}>{item.name}</Text>
                        <Text style={ModalDescription}>{item.description}</Text>
                    </ScrollView>
                </Modal>
            </View>
        )
    }
}

const fWaktu = (event)=>{
    const jamS = event.start.jam >= 10 ? event.start.jam : "0" + event.start.jam
    const menS = event.start.menit >=10 ? event.start.menit : "0" + event.start.menit
    let men = event.todo.recommended_duration - (60 - event.start.menit)
    const jamF = event.start.jam + 1 + Math.floor(men / 60)
    const menF = men % 60
    return(jamS + "."+menS + "-" + (jamF >= 10 ? jamF : "0" + jamF) + "." + (menF >= 10 ? menF : "0" + menF))
}

const dimension = Dimensions.get('window')

const sizeIcon = {
    marginTop: 4,
    width: 12.7,
    height: 14,
}

const VerLine = {
    width: 1.3,
    height: 50,
    backgroundColor: "#2ecc71"
}
const line1 = {
    marginTop: 21,
    height: 1.3,
    backgroundColor: "#2ecc71"
}
const line2 = {
    height: 1.3,
    marginBottom: 22,
    backgroundColor: "#2ecc71"
}
const line3 = {
    height: 1.3,
    marginTop: 21,
    marginBottom: 100,
    backgroundColor: "#2ecc71"
}
const row1 = {
    flexDirection: "row",
    marginBottom: 5
}
const PriceText = {
    marginTop: 15,
    fontFamily: "Ubuntu-Medium",
    fontSize: 16,
    letterSpacing: 0.08,
    color: "#2ecc71"
}
const RatingText = {
    marginTop: 15,
    fontFamily: "Ubuntu-Medium",
    fontSize: 16,
    letterSpacing: 0.08,
    color: "#2ecc71"
}
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
    marginTop: 65
}
const RatingandPrice = {
    flexDirection: "row",
    width: 290,
}
const ImageStyle = {
    width: 240,
    height: 170
}
const ImageStyleModal = {
    width: 240,
    height: 170
}
const AttractionsName = {
    marginTop: 24,
    marginBottom: 24,
    fontFamily: "Ubuntu",
    fontSize: 18,
    letterSpacing: 0.08,
    color: "#2ecc71"
}
const EventTime = {
    fontFamily: "Cabin",
    fontSize: 14,
    letterSpacing: 0.06,
    color: "#bcc2c3"
}
const Vicinity = {
    fontFamily: "Cabin",
    fontSize: 14,
    letterSpacing: 0.06,
    color: "#bcc2c3"
}
const Description = {
    fontFamily: "Cabin",
    fontSize: 14,
    letterSpacing: 0.06,
    textAlign: "justify",
    color: "#b7bdbe"
}
const ModalDescription = {
    fontFamily: "Cabin",
    fontSize: 14,
    letterSpacing: 0.06,
    textAlign: "justify",
}
