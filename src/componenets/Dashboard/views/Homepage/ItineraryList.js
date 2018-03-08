/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native'
import {ItineraryCard} from './ItineraryItems/ItineraryCard'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
    marginRight: 20,
  },
  containerCard: {
    borderRadius: 2,
    width: d.width * 286/ 360,
    height: d.height * 150 / 616,
    backgroundColor: '#eeeeee',
    marginRight: 20,
  }
})

export const ItineraryList = (props) => {
  const { itinerary } = props
  itinerary.reverse()
  const list = Object.values(itinerary).map((itinerary, index) => {
    return <ItineraryCard key={index} itinerary={itinerary} number={index} onPreviewClicked={props.onPreviewClicked}/>
  })
  return(
    <View>
      <ScrollView horizontal={true} style={style.containerScroll} showsHorizontalScrollIndicator={false}>
        {list}
      </ScrollView>
    </View>
  )
}