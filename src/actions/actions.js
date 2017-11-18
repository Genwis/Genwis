/**
 * Created by iampamungkas on 7/24/17.
 */
import  Axios  from 'axios'
export const REQUEST_ITINERARY = 'REQUEST_ITINERARY'
export const RECEIVE_ITINERARY = 'RECEIVE_ITINERARY'
export const REQUEST_REGISTER= 'REQUEST_REGISTER'
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export const REQUEST_LOGIN= 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const SELECT_DETAIL = 'SELECT_DETAIL'


export function selectDetail(detail) {
    return {
        type: SELECT_DETAIL,
        detail
    }
}

function requestItinerary(detail) {
    return {
        type:REQUEST_ITINERARY,
        detail
    }
}

function receiveItinerary(detail, data) {
    return {
        type: RECEIVE_ITINERARY,
        detail,
        response: {
            itinerary: data.itinerary,
            attractions: data.att_list
        }
    }
}

export function fetchItineray(detail){
    return dispatch =>  {
        dispatch(requestItinerary(detail))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(detail))
            .then(response => dispatch(receiveItinerary(detail, response.data)))
    }
}

function requestRegister(detail) {
  return {
    type: RECEIVE_REGISTER,
    detail
  }
}

function receiveRegister(detail, data) {
  return {
    type: RECEIVE_REGISTER,
    detail,
    data,
  }
}

export function register(detail){
  return dispatch =>  {
    dispatch(requestRegister(detail))
    return Axios.post('http://10.0.3.2:8000/api/users/register',JSON.stringify(detail))
      .then(response => dispatch(receiveRegister(detail, response.data)))
  }
}

function requestLogin(detail) {
  return {
    type:REQUEST_LOGIN,
    detail
  }
}

function receiveLogin(detail, data) {
  return {
    type: RECEIVE_LOGIN,
    detail,
    data,
  }
}

export function login(detail){
  return dispatch =>  {
    dispatch(requestLogin(detail))
    return Axios.post('http://10.0.3.2:8000/api/users/login',JSON.stringify(detail))
      .then(response => dispatch(receiveLogin(detail, response.data)))
  }
}
