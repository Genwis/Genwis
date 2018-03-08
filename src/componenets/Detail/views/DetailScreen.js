/**
 * Created by iampamungkas on 7/28/17.
 */


import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailScreenForm from './DetailScreenForm'

const mapStateToProps = state => ({
  detail: state.selectedDetail,
})

class DetailScreen extends Component {
  render() {
    const { detail, navigation, dispatch } = this.props
    return (
      <DetailScreenForm detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(DetailScreen)
