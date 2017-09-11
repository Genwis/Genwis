/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict';

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorByday } from '../../Byday/navigationConf'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        navigationState: state.Byday,
    }
};

class BydayNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        const { navigationState, dispatch } = this.props;
        return (
            <NavigatorByday
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
export default connect(mapStateToProps)(BydayNavigation)
