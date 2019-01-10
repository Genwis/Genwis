/**
 * Created by iampamungkas on 2/17/18.
 */
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Image, FlatList } from 'react-native'

const d = Dimensions.get('window')
const wid =  d.width * 230 / 360
const style = StyleSheet.create({
  containerCard: {
    borderRadius: 3,
    width: wid,
    height: wid * 0.394936709,
    backgroundColor: '#eeeeee',
    marginRight: 20,
  },
  image:{
      borderRadius: 3,
      flex: 1,
resizeMode: "stretch",
width: '100%', height: '100%'
  }
})

const dat = [
    {src:"../../../../assets/discount_banner.jpg"},
    {src:"../../../../assets/discount_banner.jpg"},
    {src:"../../../../assets/discount_banner.jpg"}
]

export const DiscountList = (props) => {
  const { itinerary } = props

  renderImage = ({item,index}) => (
      <View style={style.containerCard}>
        <Image
          source={
              require('../../../../assets/discount_banner.jpg')//ini harus di fix sih jadi sesuai dat
          }
          style={style.image}
        />
      </View>
  )

  return (
    <View>
      <FlatList
      style={style.containerScroll}
      showsHorizontalScrollIndicator={false}
        data={dat}
        renderItem={this.renderImage}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        contentInset={inset}
        contentContainerStyle={containerScroll}
      />
    </View>
  )
}
const containerScroll = {flexGrow: 1, justifyContent: 'center',paddingTop:20,paddingBottom:20,paddingLeft:20}
const inset = { right: 20 }
