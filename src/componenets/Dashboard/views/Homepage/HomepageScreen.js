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
import { NavBarComponent } from "./NavBarComponent"
import Axios from 'axios'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    letterSpacing: 0.91,
    textAlign: 'left',
    color: '#424242',
  },
  textDesc:{
      marginRight: d.width * 0.05,
      marginLeft: d.width * 0.05,
      fontFamily: 'Lato-Regular',
      fontSize: 12,
      letterSpacing: 0.68,
      color: '#9e9e9e',
  },
  scroll:{paddingTop:20},
})

class HomepageScreen extends Component {
  constructor(props) {
    super(props)
    this.onPreviewClicked = this.onPreviewClicked.bind(this)
    this.onDeleteClicked = this.onDeleteClicked.bind(this)
    this.onFabClicked = this.onFabClicked.bind(this)
  }
  state = {
    new: this.props.new,
    favdesk: '',
    favlist: '',
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
  componentDidMount() {
    // const headers = {
    //   Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
    //   'Content-Type': 'text/plain',
    // }
    // Axios.get(`http://api.generatorwisata.com/api/attraction/${this.props.detail.id}`, { headers })
    //   .then((response) => {
    //     //this.setState({ ...this.state, autocomplete: response.data})
    //     this.setState({ ...this.state, jsonGet: response.data})
    //     this.setState({ ...this.state, rp: 'Rp'})
    //     this.setState({ ...this.state, deskripsi: 'Deskripsi'})
    //     this.setState({ ...this.state, rat: '4.6'})
    //     console.log(this.state.jsonGet)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     this.setState({ ...this.state, deskripsi: "Oops, something is wrong, and it's not your fault"})
    //   })
    // console.log('randomz: ',Math.random())
    Axios.get(`http://api.generatorwisata.com/api/attractions/top`)
      .then((response) => {
        //this.setState({ ...this.state, autocomplete: response.data})
        // this.setState({ ...this.state, jsonGet: response.data})
        // this.setState({ ...this.state, rp: 'Rp'})
        // this.setState({ ...this.state, deskripsi: 'Deskripsi'})
        this.setState({ ...this.state, favlist: response.data})
        // console.log(this.state.jsonGet)
        // list.push(<Text>hello request came</Text>)
        // console.log("kepanggil comp")
      })
      .catch((err) => {
        console.log(err)
        this.setState({ ...this.state, favdesk: "Oops, something is wrong, and it's not your fault"})
      })
  }
  render() {
    const { itinerary, users, navigation, dispatch } = this.props
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#229854" />
        {
            // console.log(this.props.dispatch)
        }
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
        <ScrollView style={style.scroll}>
          {/*<View style={style.searchBar}>*/}
            {/*<TextInput placeholder="Search place, discount etc." style={style.searchText} underlineColorAndroid="transparent" />*/}
            {/*<TouchableOpacity style={{ position: 'absolute', right: 18 }}>*/}
              {/*<Ionicons name="ios-search" size={25} style={{ color: '#27ae60' }} />*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}
          {
            /*itinerary.length === 0 ?
              null
              :
              <Text style={style.textRecent}>
                Recent Itinerary
              </Text><Text>{itinerary.length}</Text>
*/
          }
          {
              itinerary.length === 0 ?
            null
            :
            <View>
            <Text style={style.textRecent}>
              Recent Itinerary
            </Text><Text style={style.textDesc}>{itinerary.length} available itinerary</Text>
            </View>
        }
          {
            itinerary.length === 0 ?
              null
              :
              <ItineraryList itinerary={this.props.itinerary} isLogin={users.isLogin} navigation={navigation} onPreviewClicked={this.onPreviewClicked} onDeleteClicked={this.onDeleteClicked}/>
          }

          <Text style={style.textRecent}>
            Discount and Promo
          </Text>
          <DiscountList itinerary={this.props.itinerary} />
          <Text style={style.textRecent}>
            Favorite Places
          </Text>
          <FavoriteList dispatch={dispatch} navigation={navigation} itinerary={this.props.itinerary} favlist={this.state.favlist}/>
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
