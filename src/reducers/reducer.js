/**
 * Created by iampamungkas on 7/24/17.
 */

import { combineReducers } from 'redux'
import {
    RECEIVE_ITINERARY,
    REQUEST_ITINERARY,
    SELECT_DETAIL
} from '../actions/actions'

function selectedDetail (state = {
    city: "Bandung",
    state: "Jawa Barat",
    country: "Indonesia",
    start:{
        day: 30,
        month: 12,
        year: 2017
    },
    end:{
        day: 3,
        month: 1,
        year: 2018
    }
}, action) {
    switch (action.type){
        case SELECT_DETAIL:
            return action.detail;
        default:
            return state
    }
}

function itineraryByDetail(
    state={
        isFetching: true,
        itinerary: { }
    }, action
){
        switch (action.type){
            case REQUEST_ITINERARY:
                return {
                    ...state,
                    isFetching: true
                };
            case RECEIVE_ITINERARY:
                return {
                    ...state,
                    isFetching: false,
                    itinerary: action.response
                };
            default:
                return state;
        }
}
// Navigation
import { NavigatorDetail } from '../componenets/Detail/navigationConf'
import { NavigatorHome} from '../componenets/Home/navigationConf'
import { NavigatorList} from '../componenets/List/navigationConf'
import { NavigatorBook} from '../componenets/Book/navigationConf'
const rootReducer = combineReducers({
    itineraryByDetail,
    selectedDetail,
    Detail: (state, action) => NavigatorDetail.router.getStateForAction(action,state),
    Home: (state,action) => NavigatorHome.router.getStateForAction(action,state),
    List: (state,action) => NavigatorList.router.getStateForAction(action,state),
    Book: (state,action) => NavigatorBook.router.getStateForAction(action,state)
});

export default rootReducer
