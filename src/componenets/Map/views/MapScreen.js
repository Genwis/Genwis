import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapScreens from './MapScreens'

const mapStateToProps = state => ({
  detail: state.koor,
})

class MapScreen extends Component {
  render() {
    const { detail, navigation, dispatch } = this.props
    return (
      <MapScreens detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(MapScreen)
