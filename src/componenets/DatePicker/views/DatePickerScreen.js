import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePickerScreens from './DatePickerScreens'

const mapStateToProps = state => ({
  detail: state.selectedDetail,
})

class DatePickerScreen extends Component {
  render() {
    const { detail, navigation, dispatch } = this.props
    return (
      <DatePickerScreens detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(DatePickerScreen)
