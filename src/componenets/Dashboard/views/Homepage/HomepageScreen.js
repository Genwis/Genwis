/**
 * Created by iampamungkas on 2/13/18.
 */
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, TouchableOpacity, Image, TextInput, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { showItinerary, deleteItinerary, isPreview, notNew } from '../../../../actions/actions'
import { ItineraryList } from './ItineraryList'
import { DiscountList } from './DiscountList'
import { FavoriteList } from './FavoriteList'
import { NavBarComponent } from "./NavBarComponent";

const d = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
  },
  video: {
    backgroundColor: '#f7f7f7',
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  searchText: {
    width: d.width * 0.85,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    elevation: 2,
  },
  searchBar: {
    margin: d.width * 0.05,
    height: d.height * 48 / 650,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRecent: {
    marginRight: d.width * 0.05,
    marginLeft: d.width * 0.05,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    letterSpacing: 0.59,
    textAlign: 'left',
    color: '#616161',
  },
})

class HomepageScreen extends Component {
  constructor(props) {
    super(props)
    this.onPreviewClicked = this.onPreviewClicked.bind(this)
    this.onDeleteClicked = this.onDeleteClicked.bind(this)
    this.onFabClicked = this.onFabClicked.bind(this)
  }
  state = {
    new: this.props.new
  }

  onFabClicked(){
    const { dispatch, navigation } = this.props
    if (this.state.new) {
      dispatch(notNew())
      this.setState({
        new: false,
      })
    }
    navigation.navigate('DetailNavigation')
  }
  onDeleteClicked(number) {
    const { dispatch, navigation } = this.props
    const show = new Promise((resolve, reject) => {
      const x = dispatch(deleteItinerary(number))
      resolve(x)
    })
      .then(() => {
      })
  }
  onPreviewClicked(number) {
    const { dispatch, navigation } = this.props
    const show = new Promise((resolve, reject) => {
      const x = dispatch(showItinerary(number))
      dispatch(isPreview(true))
      resolve(x)
    })
      .then(() => {
        navigation.navigate('ListNavigation')
      })
  }
  render() {
    const { itinerary, users, navigation } = this.props
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#229854" />
        {/*{this.state.new ?*/}
          {/*<TouchableOpacity style={{*/}
            {/*backgroundColor: 'rgba(0, 0, 0, 0.8)',*/}
            {/*position: 'absolute',*/}
            {/*flex: 1,*/}
            {/*top: 0,*/}
            {/*bottom: 0,*/}
            {/*left: 0,*/}
            {/*right: 0,*/}
            {/*alignItems: 'center',*/}
            {/*justifyContent: 'center',*/}
            {/*elevation: 11*/}
          {/*}}>*/}
            {/*<View*/}
              {/*style={{*/}
                {/*width: 209.9,*/}
                {/*height: 145.6,*/}
              {/*}}*/}
            {/*>*/}
              {/*<Text*/}
                {/*style={{*/}
                  {/*fontFamily: "Poppins-Medium",*/}
                  {/*fontSize: 16,*/}
                  {/*color: "#27ae60"*/}
                {/*}}*/}
              {/*>*/}
                {/*Tombol Generate*/}
              {/*</Text>*/}
              {/*<Text*/}
                {/*style={{*/}
                  {/*fontFamily: 'Lato-Regular',*/}
                  {/*fontSize: 12,*/}
                  {/*color: '#ffffff',*/}
                {/*}}*/}
              {/*>*/}
                {/*Tidak perlu repot - repot membuat rencana*/}
                {/*wisata, cukup masukan budget, kota tujuan,*/}
                {/*dan jangka waktu. Rencana wisatamu*/}
                {/*akan jadi dalam sekejap. Klik tombol itu.*/}
              {/*</Text>*/}
            {/*</View>*/}
          {/*</TouchableOpacity>*/}
          {/*:*/}
          {/*false*/}
        {/*}*/}
        <NavBarComponent/>
        <ScrollView>
          {/*<View style={style.searchBar}>*/}
            {/*<TextInput placeholder="Search place, discount etc." style={style.searchText} underlineColorAndroid="transparent" />*/}
            {/*<TouchableOpacity style={{ position: 'absolute', right: 18 }}>*/}
              {/*<Ionicons name="ios-search" size={25} style={{ color: '#27ae60' }} />*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}
          {
            itinerary.length === 0 ?
              null
              :
              <Text style={style.textRecent}>
                Recent Itinerary
              </Text>
          }
          {
            itinerary.length === 0 ?
              null
              :
              <ItineraryList itinerary={itinerary} isLogin={users.isLogin} navigation={navigation} onPreviewClicked={this.onPreviewClicked} onDeleteClicked={this.onDeleteClicked}/>
          }
          <Text style={style.textRecent}>
            Discount and Promo
          </Text>
          <DiscountList itinerary={this.props.itinerary} />
          <Text style={style.textRecent}>
            Favorite Places
          </Text>
          <FavoriteList itinerary={this.props.itinerary} />
        </ScrollView>
        {/*<TouchableOpacity style={style.fab} onPress={this.onFabClicked}>*/}
          {/*<Image style={{ resizeMode: 'contain', height: d.height * 0.05 }} source={require('../../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />*/}
        {/*</TouchableOpacity>*/}
      </View>
    )
  }
}
function mapStateToProps(state) {
  const { itineraryByDetail, tutorial, users } = state
  const {
    itinerary,
  } = itineraryByDetail || {
    itinerary: { },
  }

  return {
    itinerary,
    new: tutorial.new,
    users
  }
}
export default connect(mapStateToProps)(HomepageScreen)
