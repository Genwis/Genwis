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
                    <Image source={iconsMap[""+item.id.slice(0,8)]} style={ImageStyle}/>
                    <Text style={AttractionsName}>{item.name}</Text>
                    <View style={row1}>
                        <Image style={sizeIcon} source={require('../../../assets/icon/clock_2017-09-18/drawable-xxxhdpi/clock.png')}/>
                        <Text style={EventTime}>  {fWaktu(event)}</Text>
                    </View>
                    <View style={row1}>
                        <Image style={sizeIcon} source={require('../../../assets/icon/placeholder_3_2017-09-18/drawable-xxxhdpi/placeholder_3.png')}/>
                        <Text style={Vicinity} ELLIPSIZEMODE={"tail"} numberOfLines={1} >  {item.vicinity}</Text>
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
                        <View style={{marginLeft: 60, marginRight: 10}}>
                            <Text style={AttractionsName}>{item.name}</Text>
                            <Text style={ModalDescription}>{item.description}</Text>
                        </View>
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
    resizeMode: "contain"
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
    height: dimension.height * 0.7,
}
const parent = {
    width: dimension.width
}
const container = {
    width:dimension.width * 0.8,
    marginRight: 50,
    marginLeft: 50,
}
const RatingandPrice = {
    flexDirection: "row",
    width: 290,
}
const ImageStyle = {
    width: 240,
    height: 170,
    resizeMode: "contain"
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
    textAlign: "auto",
    color: "#b7bdbe"
}
const ModalDescription = {
    fontFamily: "Cabin",
    fontSize: 14,
    letterSpacing: 0.06,
    textAlign: "justify",
}
const iconsMap = {
    "1d9a9f00" : require('../../../assets/Tempat/1d9a9f00.jpg'),
    "2a577c29" : require('../../../assets/Tempat/2a577c29.jpg'),
    "4cb28eaf" : require('../../../assets/Tempat/4cb28eaf.jpg'),
    "8e1709cd" : require('../../../assets/Tempat/8e1709cd.jpg'),
    "10da722f" : require('../../../assets/Tempat/10da722f.jpg'),
    "12c71c6a" : require('../../../assets/Tempat/12c71c6a.jpg'),
    "27bcb0b3" : require('../../../assets/Tempat/27bcb0b3.jpg'),
    "68dbbc4f" : require('../../../assets/Tempat/68dbbc4f.jpg'),
    "00262d00" : require('../../../assets/Tempat/00262d00.jpg'),
    "4449fe0a" : require('../../../assets/Tempat/4449fe0a.jpg'),
    "6557df81" : require('../../../assets/Tempat/6557df81.jpg'),
    "8807eced" : require('../../../assets/Tempat/8807eced.jpg'),
    "41794ab6" : require('../../../assets/Tempat/41794ab6.jpg'),
    "46146616" : require('../../../assets/Tempat/46146616.jpg'),
    "ac6524c0" : require('../../../assets/Tempat/ac6524c0.jpg'),
    "b1bc1d07" : require('../../../assets/Tempat/b1bc1d07.jpg'),
    "bebf30ca" : require('../../../assets/Tempat/bebf30ca.jpg'),
    "d4059285" : require('../../../assets/Tempat/d4059285.jpg'),
    "de2ae42e" : require('../../../assets/Tempat/de2ae42e.jpg'),
    "fd37b6ed" : require('../../../assets/Tempat/fd37b6ed.jpg'),
}