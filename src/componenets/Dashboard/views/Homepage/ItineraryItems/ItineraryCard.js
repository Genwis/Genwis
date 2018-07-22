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
    borderRadius: 2,
    width: d.width * 290 / 360,
    height: d.height * 160 / 616,
    backgroundColor: 'white',
    marginRight: 20,
    padding: 16,
    elevation: 5,
  },
  containerCardEmpty: {
    borderRadius: 2,
    width: d.width * 290 / 360,
    height: d.height * 160 / 616,
    backgroundColor: 'white',
    marginRight: 20,
    elevation: 5,
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
    color: '#3498db',
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
  const { itinerary, number, isLogin, navigation } = props
  return (
    isLogin ?
      <View style={style.containerCard}>
        <TouchableOpacity style={{position: 'absolute', right: 10}} onPress={() => props.onDeleteClicked(number)}>
          <Ionicons name="ios-close" size={30} color={"#616161"}/>
        </TouchableOpacity>
        <Text style={style.textCity}>
          {itinerary.itinerary.detail.location.city}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 8, alignItems: 'stretch'}}>
          <Text style={style.textDetail}>
            {toolbarSubtitile(itinerary.itinerary)}
          </Text>
          <Text style={style.textPrice}>
            Rp. {numeral(itinerary.itinerary.cost).format('0,0')}
          </Text>
        </View>
        <View style={style.containerImageThumbnails}>
          <View style={style.imageThumbnail1}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
          </View>
          <View style={style.imageThumbnail1}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
          </View>
          <View style={style.imageThumbnail1}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
          </View>
          <View style={style.imageThumbnail34}>
            <Image source={iconsMap[`${Math.floor((Math.random() * 20) + 1)}`]} style={style.thumbnail} />
          </View>
        </View>
        <TouchableOpacity onPress={() => props.onPreviewClicked(number)}>
          <Text style={style.textPreview}>
            PREVIEW ITINERARY
          </Text>
        </TouchableOpacity>
      </View>
      :
      <View style={style.containerCardEmpty}>
        <TouchableOpacity style={style.buttonLogin} onPress={() => navigation.navigate('LoginNavigation')}>
          <Text style={style.loginText}>Login to See Recent Itinerary</Text>
        </TouchableOpacity>
      </View>
  )
}

function toolbarSubtitile(iten) {
  return `${moment(iten.detail.start).format('D MMMM')} - ${moment(iten.detail.finish).format('D MMMM YYYY')}`
}

const iconsMap = {
  1: require('../../../../../assets/Tempat/1d9a9f00.jpg'),
  2: require('../../../../../assets/Tempat/2a577c29.jpg'),
  3: require('../../../../../assets/Tempat/4cb28eaf.jpg'),
  4: require('../../../../../assets/Tempat/8e1709cd.jpg'),
  5: require('../../../../../assets/Tempat/10da722f.jpg'),
  6: require('../../../../../assets/Tempat/12c71c6a.jpg'),
  7: require('../../../../../assets/Tempat/27bcb0b3.jpg'),
  8: require('../../../../../assets/Tempat/68dbbc4f.jpg'),
  9: require('../../../../../assets/Tempat/00262d00.jpg'),
  10: require('../../../../../assets/Tempat/4449fe0a.jpg'),
  11: require('../../../../../assets/Tempat/6557df81.jpg'),
  12: require('../../../../../assets/Tempat/8807eced.jpg'),
  13: require('../../../../../assets/Tempat/41794ab6.jpg'),
  14: require('../../../../../assets/Tempat/46146616.jpg'),
  15: require('../../../../../assets/Tempat/ac6524c0.jpg'),
  16: require('../../../../../assets/Tempat/b1bc1d07.jpg'),
  17: require('../../../../../assets/Tempat/bebf30ca.jpg'),
  18: require('../../../../../assets/Tempat/d4059285.jpg'),
  19: require('../../../../../assets/Tempat/de2ae42e.jpg'),
  20: require('../../../../../assets/Tempat/fd37b6ed.jpg'),
}
