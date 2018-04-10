/**
 * Created by iampamungkas on 7/24/17.
 */
import Axios from 'axios'

export const REQUEST_ITINERARY = 'REQUEST_ITINERARY'
export const RECEIVE_ITINERARY = 'RECEIVE_ITINERARY'
export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const SELECT_DETAIL = 'SELECT_DETAIL'


export function selectDetail(detail) {
  return {
    type: SELECT_DETAIL,
    detail,
  }
}

function requestItinerary(detail) {
  return {
    type: REQUEST_ITINERARY,
    detail,
  }
}

function receiveItinerary(detail, data) {
  return {
    type: RECEIVE_ITINERARY,
    response: {
      detail,
      itinerary: data,
    },
  }
}

export function fetchItineray(detail) {
  const headers = {
    Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
    'Content-Type': 'text/plain',
  }
  console.log(detail)
  return (dispatch) => {
    dispatch(requestItinerary(detail))
    return Axios.post('http://api.generatorwisata.com/api/itinerary', JSON.stringify(detail), { headers })
      .then(response => dispatch(receiveItinerary(detail, response.data)))
      .catch(err => console.log(err))
  }
}

function requestRegister(detail) {
  return {
    type: RECEIVE_REGISTER,
    detail,
  }
}

function receiveRegister(detail, data) {
  return {
    type: RECEIVE_REGISTER,
    detail,
    data,
  }
}

export function register(detail) {
  return (dispatch) => {
    dispatch(requestRegister(detail))
    return Axios.post('http://api.generatorwisata.com/api/user', JSON.stringify(detail))
      .then(response => dispatch(receiveRegister(detail, response.data)))
  }
}

function requestLogin(detail) {
  return {
    type: REQUEST_LOGIN,
    detail,
  }
}

function receiveLogin(detail, data) {
  return {
    type: RECEIVE_LOGIN,
    detail,
    data,
  }
}

export function login(detail) {
  return (dispatch) => {
    dispatch(requestLogin(detail))
    return Axios.post('http://api.generatorwisata.com/api/users/login', JSON.stringify(detail))
      .then(response => dispatch(receiveLogin(detail, response.data)))
      .catch((err) => {
        console.log(err)
      })
  }
}

export const SHOWN_ITINERARY = 'SHOWN_ITINERARY'
export const showItinerary = number => ((dispatch) => {
  dispatch({
    type: SHOWN_ITINERARY,
    number,
  })
})

export const IS_PREVIEW = 'IS_PREVIEW'
export const isPreview = ans => ((dispatch) => {
  dispatch({
    type: IS_PREVIEW,
    ans,
  })
})
