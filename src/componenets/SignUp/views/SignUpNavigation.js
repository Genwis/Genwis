/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import {addNavigationHelpers, NavigationActions} from 'react-navigation'
import { NavigatorSignUp } from '../navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'
import {BackHandler} from "react-native";


const mapStateToProps = state => ({
  navigationState: state.SignUp,
})

class SignUpNavigation extends React.Component {
    static navigationOptions = {
      header: null,
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
        <NavigatorSignUp
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
export default connect(mapStateToProps)(SignUpNavigation)
