/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict';

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorBook } from '../navigationConf'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        navigationState: state.Book,
    }
};

class BookNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render(){
        const { navigationState, dispatch } = this.props;
        return (
            <NavigatorBook
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
export default connect(mapStateToProps)(BookNavigation)