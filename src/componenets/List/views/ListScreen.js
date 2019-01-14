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
      error,
    isFetching,
    itinerary,
    shownItinerary,
    isPreview,

  } = itineraryByDetail || {
      error: false,
    isFetching: true,
    itinerary: { },
  }
  // console.log('mapstatetoprops listscreen')
  // console.log('isfetching:'+itineraryByDetail.isFetching)
  //console.log('//--itineraryByDetail')
  return {
      error,
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
    //console.log('mounting lagi wtf')
    const { dispatch, selectedDetail, isPreview } = this.props
    //console.log('propsing listscreen')
    //console.log(this.props)
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
  renderf = (a,list,dispatch,navigation,error) => {

        if(a||list==undefined){
          return <ListScreenLoading error={error} />
        }else{
          // console.log("masuk screen form isfetching:",a,"list:",list)
          return <ListScreenForm dispatch={dispatch} List={list}  navigation={navigation} />
        }

  }
  render() {
    // console.log('ListScreen Render Called')
    const {
      error,isFetching, itinerary, selectedDetail, navigation, shownItinerary, isPreview, dispatch
    } = this.props

    console.log('errorprops',this.props.error)
    console.log('propz',this.props)

    let shown  = shownItinerary
    if (!isPreview){
      shown = 0
    }
    //Detail={List.detail}

    //isFetching&&List!=undefined ? <ListScreenLoading /> : <ListScreenForm dispatch={dispatch} List={List}  navigation={navigation} />

    // console.log("ini nyari delete error",itinerary)
    const List = itinerary[shown]
    // console.log("List",List)
    return (

      <View style={container1}>
        <StatusBar backgroundColor="#229854" />
        {
          this.renderf(isFetching,List,dispatch,navigation,error)
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
