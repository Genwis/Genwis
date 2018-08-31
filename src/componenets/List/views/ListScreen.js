/**
 * Created by iampamungkas on 7/29/17.
 */


import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, StatusBar, TouchableOpacity, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { fetchItineray } from '../../../actions/actions'
import { NavigationActions } from 'react-navigation'

import ListScreenForm from './ListScreenForm'
import ListScreenLoading from './ListScreenLoading'

function mapStateToProps(state) {
  const { selectedDetail, itineraryByDetail } = state
  const {
    isFetching,
    itinerary,
    shownItinerary,
    isPreview,
  } = itineraryByDetail || {
    isFetching: true,
    itinerary: { },
  }

  return {
    selectedDetail,
    itinerary,
    isFetching,
    shownItinerary,
    isPreview,
  }
}
class ListScreen extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { dispatch, selectedDetail, isPreview } = this.props
    console.log('propsing listscreen')
    console.log(this.props)
    if (!isPreview) {
      const show = new Promise((resolve, reject) => {
        const x = dispatch(fetchItineray(selectedDetail))
        resolve(x)
      })
        .then(() => {

        })
    }
  }
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  // }
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  // }
  // onBackPress = () => {
  //   const { dispatch, state, navigation } = this.props.navigation
  //   if (state.routeName === 'List') {
  //     BackHandler.removeEventListener()
  //     navigation.navigate('DashboardNavigation')
  //     return false
  //   }
  //   dispatch(NavigationActions.back())
  //   return true
  // }
  render() {
    const {
      isFetching, itinerary, selectedDetail, navigation, shownItinerary, isPreview, dispatch
    } = this.props
    let shown  = shownItinerary
    if (!isPreview){
      shown = 0
    }
    // console.log(itinerary)
    const List = itinerary[shown]
    return (

      <View style={container1}>
        <StatusBar backgroundColor="#229854" />
        {
                    isFetching ? <ListScreenLoading /> : <ListScreenForm dispatch={dispatch} List={List} Detail={List.detail} navigation={navigation} />
                }
        {
                    isFetching ? false : false
                }
      </View>
    )
  }
}
const d = Dimensions.get('window')

const bookNowText = {
  color: 'white',
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  fontWeight: 'bold',
  letterSpacing: 0.1,
}

const button = {
  width: d.width,
  height: d.height * 0.07,
  backgroundColor: '#27ae60',
  alignItems: 'center',
  justifyContent: 'center',
}

const container2 = {
  alignItems: 'center',
}
const container1 = {
  backgroundColor: '#ffffff',
  flex: 1,
}
export default connect(mapStateToProps)(ListScreen)
