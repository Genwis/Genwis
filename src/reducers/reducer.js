/**
 * Created by iampamungkas on 7/24/17.
 */

import { combineReducers } from 'redux'
import {
    RECEIVE_ITINERARY,
    REQUEST_ITINERARY,
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    REQUEST_REGISTER,
    RECEIVE_REGISTER,
    SELECT_DETAIL,
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
            return action.detail
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
                }
            case RECEIVE_ITINERARY:
                return {
                    ...state,
                    isFetching: false,
                    itinerary: action.response
                }
            default:
                return state
        }
}

function users(
  state={
    isFetching: false,
    data: {},
    isLogin: false,
  },action
) {
  switch (action.type){
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_LOGIN:
      return {
        ...state,
        isFetching: false,
        isLogin: true,
        data: action.data
      }
    case REQUEST_REGISTER:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_REGISTER:
      return {
        ...state,
        isFetching: false,
        isLogin: true,
        data: action.data
      }
    default:
      return state
  }
}
// Navigation
import { NavigatorDetail } from '../componenets/Detail/navigationConf'
import { NavigatorHome} from '../componenets/Home/navigationConf'
import { NavigatorList} from '../componenets/List/navigationConf'
import { NavigatorBook} from '../componenets/Book/navigationConf'
import { NavigatorByday} from '../componenets/Byday/navigationConf'
import { NavigatorMap} from '../componenets/Map/navigationConf'
import { NavigatorLogin} from '../componenets/Login/navigationConf'
import { NavigatorSignUp} from '../componenets/SignUp/navigationConf'
const rootReducer = combineReducers({
    itineraryByDetail,
    selectedDetail,
    users,
    Detail: (state, action) => NavigatorDetail.router.getStateForAction(action,state),
    Home: (state,action) => NavigatorHome.router.getStateForAction(action,state),
    List: (state,action) => NavigatorList.router.getStateForAction(action,state),
    Book: (state,action) => NavigatorBook.router.getStateForAction(action,state),
    Byday: (state,action) => NavigatorByday.router.getStateForAction(action,state),
    Map: (state,action) => NavigatorMap.router.getStateForAction(action,state),
    Login: (state,action) => NavigatorLogin.router.getStateForAction(action,state),
	  SignUp: (state,action) => NavigatorSignUp.router.getStateForAction(action,state),
})

export default rootReducer
