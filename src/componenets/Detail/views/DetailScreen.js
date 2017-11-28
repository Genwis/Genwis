/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict'
import React, { Component } from 'react'
import DetailScreenForm from "./DetailScreenForm"
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        detail: state.selectedDetail
    }
}

class DetailScreen extends Component{
    render(){
        const { detail, navigation, dispatch } = this.props
        return(
            <DetailScreenForm detail={detail} navigation={navigation} dispatch={dispatch}/>
        )
    }
}
export default connect(mapStateToProps)(DetailScreen)
