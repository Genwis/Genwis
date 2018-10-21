/**
 * Created by iampamungkas on 2/18/18.
 */
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { AttractionCard } from './AttractionItems/AttractionCard'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
    flex: 1,
  },
  containerCard: {
    flex: 1,
    borderRadius: 2,
    width: d.width * 200 / 360,
    backgroundColor: '#eeeeee',
    marginRight: 20,
    shadowColor: '#eeeeee',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0,
    margin:5,
  },
})

export const FavoriteList = (props) => {
  const { itinerary } = props
  return (
    <View style={{marginBottom:20}}>
      <ScrollView horizontal style={style.containerScroll} showsHorizontalScrollIndicator={false}>

        <View style={style.containerCard} elevation={3}>
          <AttractionCard/>
        </View>
        <View style={style.containerCard} elevation={3}>
          <AttractionCard/>
        </View>
        <View style={style.containerCard} elevation={3}>
          <AttractionCard/>
        </View>
        <View style={style.containerCard} elevation={3}>
          <AttractionCard/>
        </View>

      </ScrollView>
    </View>
  )
}
