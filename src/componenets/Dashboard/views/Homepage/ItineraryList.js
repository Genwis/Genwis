/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { ItineraryCard } from './ItineraryItems/ItineraryCard'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
    flex:1,
  },
  containerCard: {
    flex:1,
    borderRadius: 2,
    width: d.width * 286 / 360,
    height: d.height * 150 / 616,
    backgroundColor: '#eeeeee',
    //marginRight: 20,
    shadowColor: '#eeeeee',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    zIndex:999,
    shadowRadius: 0,
    shadowOpacity: 0,
    padding:50,
    margin:50,
  },
})

export const ItineraryList = (props) => {
  const { itinerary, isLogin, navigation } = props
  const list = Object.values(itinerary).map((itinerary, index) => <ItineraryCard
    key={index}
    itinerary={itinerary}
    number={index}
    isLogin={isLogin}
    navigation={navigation}
    elevation={3}
    //style={style.containerCard}
    onPreviewClicked={props.onPreviewClicked}
    onDeleteClicked={props.onDeleteClicked}
  />)
  return (
    <View style={{marginBottom:20}}>
      <ScrollView horizontal style={style.containerScroll} showsHorizontalScrollIndicator={false}>

        {list}

      </ScrollView>
    </View>
  )
}
