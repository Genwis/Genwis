/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorCityPicker } from '../navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  // detail: state.Search,
  navigationState: state.CityPicker,

})
class CityPickerNavigation extends React.Component {
    static navigationOptions = {
      header: null,
    }
    render() {
      const { navigationState, dispatch, navigation } = this.props

      return (
        <NavigatorCityPicker
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
export default connect(mapStateToProps)(CityPickerNavigation)
