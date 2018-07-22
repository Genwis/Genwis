/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import {addNavigationHelpers, NavigationActions} from 'react-navigation'
import { NavigatorList } from '../navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'
import {BackHandler} from "react-native";


const mapStateToProps = state => ({
  navigationState: state.List,
})

class ListNavigation extends React.Component {
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
      console.log(state)
      if (state.routeName === 'DashboardNavigation') {
        BackHandler.removeEventListener()
        BackHandler.exitApp()
        return false
      }
      dispatch(NavigationActions.navigate({ routeName: 'DashboardNavigation' }))
      return true
    }
    render() {
      const { navigationState, dispatch, navigation } = this.props
      return (
        <NavigatorList
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
export default connect(mapStateToProps)(ListNavigation)
