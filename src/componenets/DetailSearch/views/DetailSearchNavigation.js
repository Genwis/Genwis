

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorDetailSearch } from '../../DetailSearch/navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  navigationState: state.DetailSearch,
})

class DetailSearchNavigation extends React.Component {
    static navigationOptions = {
      header: null,
    }
    onBackPress = () => {
      const { dispatch, state } = this.props.navigation
      // console.log(state)
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
        <NavigatorDetailSearch
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
export default connect(mapStateToProps)(DetailSearchNavigation)
