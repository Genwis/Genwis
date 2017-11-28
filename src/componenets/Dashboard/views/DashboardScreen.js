/**
 * Created by iampamungkas on 11/25/17.
 */
import React, {Component} from 'react';
import {Dimensions, View} from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    detail: state.selectedDetail
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

export default connect(mapStateToProps)(DashboardScreen)