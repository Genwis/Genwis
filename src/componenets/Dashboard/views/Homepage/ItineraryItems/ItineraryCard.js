/**
* Created by iampamungkas on 2/17/18.
*/
import React from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import numeral from 'numeral'
import Ionicons from 'react-native-vector-icons/Ionicons'

const d = Dimensions.get('window')
const style = StyleSheet.create({
    containerScroll: {
        padding: 20,
    },
    containerCard: {
        flex:1,
        borderRadius: 5,
        width: d.width * 290 / 360,
        //height: d.height * 160 / 616,
        backgroundColor: '#ffffff',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
        // shadowColor: '#eeeeee',
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // shadowRadius: 0,
        // shadowOpacity: 0,
        borderWidth: 0.7,
        borderColor: '#e0e0e0',
        padding:16,
        // elevation:3,
    },
    containerCardEmpty: {
        borderRadius: 5,
        width: d.width * 290 / 360,
        height: d.height * 160 / 616,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginRight: 20,
        // elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCity: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#616161',
    },
    textDetail: {
        fontFamily: 'Lato-Regular',
        fontSize: 10,
        color: '#bdbdbd',
    },
    textPrice: {
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        color: '#27ae60',
        position: 'absolute',
        right: 1
    },
    containerImageThumbnails: {
        flexDirection: 'row',
    },
    imageThumbnail1: {
        width: d.width * 54 / 360,
        height: d.width * 54 / 360,
        backgroundColor: '#eeeeee',
        marginRight: 12,
    },
    imageThumbnail34: {
        width: d.width * 54 / 360,
        height: d.width * 54 / 360,
        backgroundColor: '#eeeeee',
    },
    textPreview: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        textAlign: 'center',
        color: '#27ae60',
        marginTop: 15,
    },
    thumbnail: {
        width: d.width * 54 / 360,
        height: d.width * 54 / 360,
    },
    buttonLogin: {
        backgroundColor: '#27ae60',
        borderRadius: d.height * 0.07 / 2,
        width: d.width * 0.6,
        height: d.height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: 'white',
    },
})

export const ItineraryCard = (props) => {
    const { itinerarys, number, isLogin, navigation } = props
    // console.log('props',props.itinerarys)
    // console.log("number,",number)
    // console.log("itin,",itinerarys)
    // console.log("itintype,",typeof(props.itinerarys))

    // console.log(itinerary.itinerary.time_line[0])
    renderImages = () =>{//function to render images
        let list = []
        // console.log("itin isi,",props.itinerarys.itinerary)
        let counter = 0
        // console.log("ititnerayray typeof",typeof(itinerary.itinerary.time_line))
        for (event of props.itinerarys.itinerary.time_line) {
            if(event.events!=null){
                for (att of event.events){
                    if(att.attraction.photo!=null&&att.attraction.photo.length!=0){
                        // console.log(att.attraction.photo[0])
                        list.push(<View key={counter+1} style={style.imageThumbnail1}>
                            <Image source={{uri:att.attraction.photo[0]}} style={style.thumbnail} />
                            </View>)
                            counter++
                        }
                        if(counter>3){
                            break
                        }

                    }
                }
                if(counter>3){
                    break
                }
            }
            return (
                <View style={style.containerImageThumbnails}>
                {list}
                </View>
            )
            /*
            <View style={style.imageThumbnail1}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
            </View>
            <View style={style.imageThumbnail1}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
            </View>
            <View style={style.imageThumbnail34}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
            </View>
            */
        }
        returnCard = () => {
            return(
                <View style={style.containerCard}>
                {
                    // console.log('return prosp',props.itinerarys)
                    console.log("itinerarycard kepanggil lagi")
                }
                <TouchableOpacity style={{position: 'absolute', right: 10}} onPress={() => props.onDeleteClicked(number)}>
                <Ionicons name="ios-close" size={30} color={"#616161"}/>
                </TouchableOpacity>
                <Text style={style.textCity}>
                {props.itinerarys.itinerary.detail.location.city}
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 8, alignItems: 'stretch'}}>
                <Text style={style.textDetail}>
                {toolbarSubtitile(props.itinerarys.itinerary)}
                </Text>
                <Text style={style.textPrice}>
                Rp. {numeral(props.itinerarys.itinerary.cost).format('0,0')}
                </Text>
                </View>
                {this.renderImages()}
                <TouchableOpacity onPress={() => props.onPreviewClicked(number)}>
                <Text style={style.textPreview}>
                PREVIEW ITINERARY
                </Text>
                </TouchableOpacity>
                </View>
            )
        }
        return (//isLogin
            // true ?

            <View>
            {this.returnCard()}
            </View>
            // :
            // <View style={style.containerCardEmpty}>
            // <TouchableOpacity style={style.buttonLogin} onPress={() => navigation.navigate('LoginNavigation')}>
            // <Text style={style.loginText}>Login to See Recent Itinerary</Text>
            // </TouchableOpacity>
            // </View>
        )
        // console.log("after")
    }

    function toolbarSubtitile(iten) {
        // console.log("after")
        return `${moment(iten.detail.start).format('D MMMM')} - ${moment(iten.detail.finish).format('D MMMM YYYY')}`
    }

    // const iconsMap = {
    //     1: require('../../../../../assets/Tempat/1d9a9f00.jpg'),
    //     2: require('../../../../../assets/Tempat/2a577c29.jpg'),
    //     3: require('../../../../../assets/Tempat/4cb28eaf.jpg'),
    //     4: require('../../../../../assets/Tempat/8e1709cd.jpg'),
    //     5: require('../../../../../assets/Tempat/10da722f.jpg'),
    //     6: require('../../../../../assets/Tempat/12c71c6a.jpg'),
    //     7: require('../../../../../assets/Tempat/27bcb0b3.jpg'),
    //     8: require('../../../../../assets/Tempat/68dbbc4f.jpg'),
    //     9: require('../../../../../assets/Tempat/00262d00.jpg'),
    //     10: require('../../../../../assets/Tempat/4449fe0a.jpg'),
    //     11: require('../../../../../assets/Tempat/6557df81.jpg'),
    //     12: require('../../../../../assets/Tempat/8807eced.jpg'),
    //     13: require('../../../../../assets/Tempat/41794ab6.jpg'),
    //     14: require('../../../../../assets/Tempat/46146616.jpg'),
    //     15: require('../../../../../assets/Tempat/ac6524c0.jpg'),
    //     16: require('../../../../../assets/Tempat/b1bc1d07.jpg'),
    //     17: require('../../../../../assets/Tempat/bebf30ca.jpg'),
    //     18: require('../../../../../assets/Tempat/d4059285.jpg'),
    //     19: require('../../../../../assets/Tempat/de2ae42e.jpg'),
    //     20: require('../../../../../assets/Tempat/fd37b6ed.jpg'),
    // }
