import React, { Component } from 'react'
import { connect } from 'react-redux'
import CityPickerScreens from './CityPickerScreens'

const mapStateToProps = state => ({
  detail: state.selectedDetail,
})

class CityPickerScreen extends Component {
  render() {
    const { detail, navigation, dispatch } = this.props
    return (
      <CityPickerScreens detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(CityPickerScreen)
