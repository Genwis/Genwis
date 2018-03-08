/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native'
const d = Dimensions.get('window')
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
  },
  containerCard: {
    borderRadius: 2,
    width: d.width * 230/ 360,
    height: d.height * 90 / 616,
    backgroundColor: '#eeeeee',
    marginRight: 20,
  }
})

export const DiscountList = (props) => {
  const { itinerary } = props
  return(
    <View>
      <ScrollView horizontal={true} style={style.containerScroll} showsHorizontalScrollIndicator={false}>
        <View style={style.containerCard}>
        
        </View>
        <View style={style.containerCard}>
        
        </View>
        <View style={style.containerCard}>
        
        </View>
        <View style={style.containerCard}>
        
        </View>
      </ScrollView>
    </View>
  )
}