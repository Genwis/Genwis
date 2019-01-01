/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Image } from 'react-native'

const d = Dimensions.get('window')
const wid =  d.width * 230 / 360
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
  },
  containerCard: {
    borderRadius: 3,
    width: wid,
    height: wid * 0.394936709,
    backgroundColor: '#eeeeee',
    marginRight: 20,
  },
})

export const DiscountList = (props) => {
  const { itinerary } = props
  return (
    <View>
      <ScrollView horizontal style={style.containerScroll} showsHorizontalScrollIndicator={false}>
        <View style={style.containerCard}>
          <Image
            source={require('../../../../assets/discount_banner.jpg')}
            style={{
              borderRadius: 3,
              flex: 1,
        resizeMode: "stretch",
width: '100%', height: '100%'
            }}
          />
        </View>
        <View style={style.containerCard}>
          <Image
            source={require('../../../../assets/discount_banner.jpg')}
            style={{
              borderRadius: 3,
              flex: 1,
        resizeMode: "stretch",
width: '100%', height: '100%'
            }}
          />
        </View>
        <View style={style.containerCard}>
          <Image
            source={require('../../../../assets/discount_banner.jpg')}
            style={{
              borderRadius: 3,
              flex: 1,
        resizeMode: "stretch",
width: '100%', height: '100%'
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
