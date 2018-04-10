/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { NavigatorByday } from '../../Byday/navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  navigationState: state.Byday,
})

class BydayNavigation extends React.Component {
    static navigationOptions = {
      header: null,
    }
    render() {
      const { navigationState, dispatch, navigation } = this.props
      return (
        <NavigatorByday
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
export default connect(mapStateToProps)(BydayNavigation)
