

import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchScreenForm from './SearchScreenForm'

function mapStateToProps(state) {
// const mapStateToProps = state => ({
//   detail: state.aidi,
// })
const detail = state.aidi
console.log('mapstatetoprops searchscreen')
return detail
}
class SearchScreen extends Component {
  render() {
    console.log('ScreenSearch Render Called')
    const { detail, navigation, dispatch } = this.props
    return (
      <SearchScreenForm detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(SearchScreen)
