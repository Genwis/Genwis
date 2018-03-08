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
  SHOWN_ITINERARY,
  IS_PREVIEW,
} from '../actions/actions'
import {
  RECEIVE_USER_DATA,
  REQUEST_USER_DATA,
  RECEIVE_LOGOUT,
  REQUEST_LOGOUT
} from '../actions/UserActions'

function selectedDetail(state = {
  city: 'Bandung',
  state: 'Jawa Barat',
  country: 'Indonesia',
  start: {
    day: 1,
    month: 3,
    year: 2018,
  },
  end: {
    day: 5,
    month: 3,
    year: 2018,
  },
}, action) {
  switch (action.type) {
    case SELECT_DETAIL:
      return action.detail
    default:
      return state
  }
}

function itineraryByDetail(state = {
  isFetching: true,
  itinerary: [],
  shownItinerary: 0,
  isPreview: false,
}, action) {
  switch (action.type) {
    case REQUEST_ITINERARY:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_ITINERARY:
      const length = state.itinerary.length
      return {
        ...state,
        shownItinerary: length,
        itinerary: [...state.itinerary, action.response],
        isFetching: false,
      }
    case SHOWN_ITINERARY:
      return {
        ...state,
        shownItinerary: action.number
      }
    case IS_PREVIEW:
      return {
        ...state,
        isPreview: action.ans
      }
    default:
      return state
  }
}

function users(state = {
  isFetching: false,
  data: {},
  isLogin: false,
  profile: {},
  isUserData: false,
}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true,
        username: action.detail.username,
      }
    case RECEIVE_LOGIN:
      return {
        ...state,
        isFetching: false,
        isLogin: true,
        data: action.data,
      }
    case REQUEST_REGISTER:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_REGISTER:
      return {
        ...state,
        isFetching: false,
        isLogin: true,
        data: action.data,
      }
    case REQUEST_USER_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_USER_DATA:
      return {
        ...state,
        isFetching: false,
        isUserData: true,
        profile: action.data,
      }
    case REQUEST_LOGOUT:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_LOGOUT:
      return {
        ...state,
        isFetching: false,
        data: {},
        isLogin: false,
        profile: {},
        isUserData: false,
        username: '',
      }
    default:
      return state
  }
}
// Navigation
import { NavigatorDetail } from '../componenets/Detail/navigationConf'
import { NavigatorHome } from '../componenets/Home/navigationConf'
import { NavigatorList } from '../componenets/List/navigationConf'
import { NavigatorBook } from '../componenets/Book/navigationConf'
import { NavigatorByday } from '../componenets/Byday/navigationConf'
import { NavigatorMap } from '../componenets/Map/navigationConf'
import { NavigatorLogin } from '../componenets/Login/navigationConf'
import { NavigatorSignUp } from '../componenets/SignUp/navigationConf'
import { NavigatorDashboard } from '../componenets/Dashboard/navigationConf'

const rootReducer = combineReducers({
  itineraryByDetail,
  selectedDetail,
  users,
  Detail: (state, action) => NavigatorDetail.router.getStateForAction(action, state),
  Home: (state, action) => NavigatorHome.router.getStateForAction(action, state),
  List: (state, action) => NavigatorList.router.getStateForAction(action, state),
  Book: (state, action) => NavigatorBook.router.getStateForAction(action, state),
  Byday: (state, action) => NavigatorByday.router.getStateForAction(action, state),
  Map: (state, action) => NavigatorMap.router.getStateForAction(action, state),
  Login: (state, action) => NavigatorLogin.router.getStateForAction(action, state),
  SignUp: (state, action) => NavigatorSignUp.router.getStateForAction(action, state),
  Dashboard: (state, action) => NavigatorDashboard.router.getStateForAction(action, state),
})

export default rootReducer
