/**
 * Created by iampamungkas on 7/24/17.
 */

import { combineReducers } from 'redux'
import moment from 'moment'
import {
  RECEIVE_ITINERARY,
  REQUEST_ITINERARY,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  REQUEST_REGISTER,
  RECEIVE_REGISTER,
  SELECT_DETAIL,
  SEARCH_DETAIL,
  SELECTED_KOOR,
  SHOWN_ITINERARY,
  DELETE_ITINERARY,
  IS_PREVIEW,
  NOT_NEW,
  DELETE,
} from '../actions/actions'
import {
  RECEIVE_USER_DATA,
  REQUEST_USER_DATA,
  RECEIVE_LOGOUT,
  REQUEST_LOGOUT,
} from '../actions/UserActions'

function tutorial(state = {
  new : true
}, action) {
  switch (action.type) {
    case NOT_NEW:
      return {...state, new: false}
    default:
      return state
  }
}

function aidi(state = {
  id : ''
}, action) {
  switch (action.type) {
    case SEARCH_DETAIL:
      return {...state, id: action.detail}
    default:
      return state
  }
}

function koor(state = {
  item : ''
}, action) {
  switch (action.type) {
    case SELECTED_KOOR:
      return {...state, item: action.detail.item}
    default:
      return state
  }
}

function selectedDetail(state = {
  location_id: '8ec9ee93-8863-419a-96f9-9a2a4cc7d815',
  start: moment().format('YYYY-MMM-DD'),
  finish: moment().add(3, 'd').format('YYYY-MMM-DD'),
  budget: 1000000.0,
  tags: {
    culture: false,
    outdoors: false,
    history: false,
    shopping: false,
    wildlife: false,
    beaches: false,
    mountain: false,
    museum: false,
    amusement: false,
    hidden_paradise: false,
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
        shownItinerary: 0,
        itinerary: [action.response, ...state.itinerary],
        isFetching: false,
      }
    case SHOWN_ITINERARY:
      return {
        ...state,
        shownItinerary: action.number,
      }
    case DELETE_ITINERARY:
      const deletedItinerary = state.itinerary.length > 1 ? state.itinerary.splice(action.number, 1) : []
      return {
        ...state,
        itinerary: deletedItinerary
      }
    case IS_PREVIEW:
      return {
        ...state,
        isPreview: action.ans,
      }
    case DELETE:
      return {
        ...state,
        isFetching: true,
        itinerary: [],
        shownItinerary: 0,
        isPreview: false,
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
import { NavigatorSearch } from '../componenets/Dashboard/views/Search/navigationConf'
import { NavigatorDetailSearch } from '../componenets/DetailSearch/navigationConf'
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
  tutorial,
  aidi,
  koor,
  Detail: (state, action) => NavigatorDetail.router.getStateForAction(action, state),
  Search: (state, action) => NavigatorSearch.router.getStateForAction(action, state),
  DetailSearch: (state, action) => NavigatorDetailSearch.router.getStateForAction(action, state),
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
