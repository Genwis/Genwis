/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native'
import { ItineraryCard } from './ItineraryItems/ItineraryCard'
import { JUSTEST } from './ItineraryItems/JUSTEST'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  containerScroll: {
    padding: 20,
    flex:1,
  },
  containerCard: {
    flex:1,
    borderRadius: 5,
    width: d.width * 286 / 360,
    height: d.height * 150 / 616,
    backgroundColor: '#eeeeee',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    //marginRight: 20,
    // shadowColor: '#eeeeee',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // zIndex:999,
    // shadowRadius: 0,
    // shadowOpacity: 0,
    padding:50,
    margin:50,
  },
})

export const ItineraryList = (props) => {
  const { itinerary, isLogin, navigation } = props
  // const list = Object.values(itinerary).map((itinerary, index) => <ItineraryCard
  //   key={index}
  //   itinerarys={itinerary}
  //   number={index}
  //   isLogin={isLogin}
  //   navigation={navigation}
  //   // elevation={3}
  //   //style={style.containerCard}
  //   onPreviewClicked={props.onPreviewClicked}
  //   onDeleteClicked={props.onDeleteClicked}
  // />)

  renderCards = () =>{
      let list = []
      let counter = 0
      for (itin of itinerary) {
          list.push(<ItineraryCard
            key={counter+1}
            itinerarys={itin}
            number={counter+1}
            isLogin={isLogin}
            navigation={navigation}
            // elevation={3}
            //style={style.containerCard}
            onPreviewClicked={props.onPreviewClicked}
            onDeleteClicked={props.onDeleteClicked}
          />)
          counter++
      }
      return(
          <ScrollView horizontal style={style.containerScroll} showsHorizontalScrollIndicator={false}>
                      {list}
          </ScrollView>
      )
  }
  output = () =>{
      return(<ScrollView horizontal style={{display:'none'}} showsHorizontalScrollIndicator={false}>
      </ScrollView>)
  }
  // const list = Object.values(itinerary).map((itinerary, index) => )
  return (
    <View style={{marginBottom:20}}>

    {
        this.renderCards()

        // {console.log('testkenapailang',itinerary)}
        // <Text>Test</Text>
        // <JUSTEST />
    }
    {
        this.output()
    }

    </View>
  )
}
