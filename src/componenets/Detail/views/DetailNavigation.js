/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import { addNavigationHelpers,NavigationActions } from 'react-navigation'
import { NavigatorDetail } from '../../Detail/navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'
import {BackHandler} from "react-native";
// Redux
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  navigationState: state.Detail,
})

class DetailNavigation extends React.Component {
//     static navigationOptions = ({ navigation }) => {
//     const { params } = navigation.state;
//     return params;
// };
    static navigationOptions = {
      // header: null,
      title: 'Make an itinerary plan',
      headerTintColor: '#ffffff',
      headerStyle: {
     backgroundColor: '#27ae60',
   },
   headerTitleStyle: {
      fontWeight: 'normal',
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      letterSpacing: 0.91
    },
    }
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
      const { dispatch, state } = this.props.navigation
      if (state.routeName === 'DashboardNavigation') {
        BackHandler.removeEventListener()
        BackHandler.exitApp()
        return false
      }
      dispatch(NavigationActions.back())
      return true
    }
    render() {
      const { navigationState, dispatch, navigation } = this.props
      return (
        <NavigatorDetail
          navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: navigationState,
                      addListener: navigation.addListener,
                    })
                }
        />
      )
    }
}
export default connect(mapStateToProps)(DetailNavigation)
