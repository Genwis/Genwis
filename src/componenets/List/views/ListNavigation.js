/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict';

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorList } from '../navigationConf'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        navigationState: state.List,
    }
};

class ListNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        const { navigationState, dispatch } = this.props;
        return (
            <NavigatorList
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        )
    }
}
export default connect(mapStateToProps)(ListNavigation)
