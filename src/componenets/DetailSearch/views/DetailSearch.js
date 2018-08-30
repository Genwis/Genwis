import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchScreen from '../../Dashboard/views/Search/SearchScreen'
import DetailSearchDetail from './DetailSearchDetail'

const mapStateToProps = state => ({
  detail: state.aidi,
})

class DetailSearch extends Component {
  render() {
    const { detail, navigation, dispatch } = this.props
    return (
      <DetailSearchDetail detail={detail} navigation={navigation} dispatch={dispatch} />
    )
  }
}
export default connect(mapStateToProps)(DetailSearch)
