/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHome } from '../navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
// Redux
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  navigationState: state.Home,
})
const addListener = createReduxBoundAddListener("root");

class HomeNavigation extends React.Component {
    static navigationOptions = {
      header: null,
    }

    render() {
      const { dispatch, navigationState } = this.props
      return (
        <NavigatorHome
          navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: navigationState,
                        addListener,
                    })
                }
        />
      )
    }
}

export default connect(mapStateToProps)(HomeNavigation)
