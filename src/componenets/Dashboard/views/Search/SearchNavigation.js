/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorSearch } from './navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  navigationState: state.Search,
})

class SearchNavigation extends React.Component {
    static navigationOptions = {
      header: null,
    }
    render() {
      const { navigationState, dispatch, navigation } = this.props
      return (
        <NavigatorSearch
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
export default connect(mapStateToProps)(SearchNavigation)
