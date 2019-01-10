/**
 * Created by iampamungkas on 4/10/18.
 */
/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import StarRating from 'react-native-star-rating'
import {idS } from '../../../../../actions/actions'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
  },
  containerCard: {
    borderRadius: 5,
    width: d.width * 200 / 360,
    backgroundColor: 'white',
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden'
  },
  textCity: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#424242',
    letterSpacing:0.86,
    lineHeight:19,
  },
  textDetail: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#9e9e9e',
    marginBottom: 8,
    letterSpacing: 0.68,
    lineHeight: 19,
  },
  textPrice: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#27ae60',
    position: 'absolute',
    letterSpacing: 0.68,
    right: 0,
    lineHeight: 19,
  },
  containerImageThumbnails: {
    flexDirection: 'row',
  },
  imageThumbnail: {
    width: d.width * 200 / 360,
    height: d.height * 165 / 616,
    backgroundColor: '#eeeeee',
  },
  detail: {
    padding : 14
},
view1:{flexDirection: 'row'},
view2:{width: d.width * 55 / 360},
})

export const AttractionCard = (props) => {
    const { itinerary, name, location, price, image, dispatch, id } = props
  // const rand = Math.floor((Math.random() * 20) + 1)
  onPressItem = (aidi) => {
    props.dispatch(idS(aidi))
    props.navigation.navigate('DetailSearchNavigation')
  }
  priceChanger = (price) => {
      return String(price).replace(/(.)(?=(\d{3})+$)/g,'$1.')
  }
  // console.log('itinerary fav',itinerary)
  return (
      <TouchableOpacity onPress={() => onPressItem(id)}>
    <View style={style.containerCard}>
      <Image
        source={{uri: image}}
        style={style.imageThumbnail}
      />
      <View style={style.detail}>
        <Text style={style.textCity} numberOfLines={1}>
          {name}
        </Text>
        <Text style={style.textDetail} numberOfLines={1}>
          {location}
        </Text>
        <View style={style.view1}>
          <View style={style.view2}>
            <StarRating
              disabled
              maxStars={5}
              rating={4.6}
              fullStarColor={'#ffcd00'}
              emptyStarColor={'#ffcd00'}
              starSize={12}
            />
          </View>
          <Text style={style.textPrice}>Rp{priceChanger(price)}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}
//
// const iconsMap = {
//   1: require('../../../../../assets/Tempat/1d9a9f00.jpg'),
//   2: require('../../../../../assets/Tempat/2a577c29.jpg'),
//   3: require('../../../../../assets/Tempat/4cb28eaf.jpg'),
//   4: require('../../../../../assets/Tempat/8e1709cd.jpg'),
//   5: require('../../../../../assets/Tempat/10da722f.jpg'),
//   6: require('../../../../../assets/Tempat/12c71c6a.jpg'),
//   7: require('../../../../../assets/Tempat/27bcb0b3.jpg'),
//   8: require('../../../../../assets/Tempat/68dbbc4f.jpg'),
//   9: require('../../../../../assets/Tempat/00262d00.jpg'),
//   10: require('../../../../../assets/Tempat/4449fe0a.jpg'),
//   11: require('../../../../../assets/Tempat/6557df81.jpg'),
//   12: require('../../../../../assets/Tempat/8807eced.jpg'),
//   13: require('../../../../../assets/Tempat/41794ab6.jpg'),
//   14: require('../../../../../assets/Tempat/46146616.jpg'),
//   15: require('../../../../../assets/Tempat/ac6524c0.jpg'),
//   16: require('../../../../../assets/Tempat/b1bc1d07.jpg'),
//   17: require('../../../../../assets/Tempat/bebf30ca.jpg'),
//   18: require('../../../../../assets/Tempat/d4059285.jpg'),
//   19: require('../../../../../assets/Tempat/de2ae42e.jpg'),
//   20: require('../../../../../assets/Tempat/fd37b6ed.jpg'),
// }
// const placeMap = {
//   1 : {
//     name: "Puri Gardenia",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   2 : {
//     name: "Boscha Observatory",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   3 : {
//     name: "Masjid Agung Bandung",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   4 : {
//     name: "Farm Ville",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   5 : {
//     name: "Floating Market",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   6 : {
//     name: "Curug Putri",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   7 : {
//     name: "Shinju",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   8 : {
//     name: "Trans Studio",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   9 : {
//     name: "Novotel",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   10 : {
//     name: "Cafe Munjul",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   11 : {
//     name: "McDoen",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   12 : {
//     name: "Kedai Esjus",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   13 : {
//     name: "Situ Patenggeng",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   14 : {
//     name: "City View",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   15 : {
//     name: "Puri Gardenia",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   16 : {
//     name: "Armor's Cafe",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   17 : {
//     name: "Borobudur",
//     location: "Magelang, Jawa Tengah",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   18 : {
//     name: "Big Screen Park",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   19 : {
//     name: "Museum Geologi",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
//   20 : {
//     name: "Ciwalk",
//     location: "Bandung, Jawa Barat",
//     price: "Rp. 200rb",
//     rating: 4,
//   },
// }
