

import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchScreenForm from './SearchScreenForm'

const mapStateToProps = state => ({
  detail: state.aidi,
})

class SearchScreen extends Component {
  render() {
    const { detail, navigation, dispatch } = this.props
    return (
      <SearchScreenForm detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(SearchScreen)
