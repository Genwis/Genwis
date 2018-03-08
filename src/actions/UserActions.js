/**
 * Created by iampamungkas on 2/13/18.
 */
import Axios from 'axios'

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA'
function requestUserData(detail) {
  return {
    type: REQUEST_USER_DATA,
    detail,
  }
}

function receiveUserData(detail, data) {
  return {
    type: RECEIVE_USER_DATA,
    detail,
    data,
  }
}

export function UserData(detail) {
  return (dispatch) => {
    dispatch(requestUserData(detail))
    const headers = {
      Authentication: detail.data.authentication,
      'Content-Type': 'text/plain',
    };
    return Axios.get(`http://dev.generatorwisata.com/api/user/${detail.username}`, { headers })
      .then(response => dispatch(receiveUserData(detail, response.data)))
      .catch((err) => {
        console.log(err)
      })
  }
}

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT'
function requestLogout(detail) {
  return {
    type: REQUEST_LOGOUT,
    detail,
  }
}

function receiveLogout(detail, data) {
  return {
    type: RECEIVE_LOGOUT,
    detail,
    data,
  }
}

export function Logout(detail) {
  return (dispatch) => {
    dispatch(requestLogout(detail))
    const headers = {
      Authentication: detail.data.authentication,
      'Content-Type': 'text/plain',
    };
    return Axios.delete('http://dev.generatorwisata.com/api/users/logout', { headers })
      .then(response => dispatch(receiveLogout(detail, response.data)))
      .catch((err) => {
        console.log(err)
      })
  }
}

export const REQUEST_EDIT_PROFILE = 'REQUEST_EDIT_PROFILE'
export const RECEIVE_EDIT_PROFILE = 'RECEIVE_EDIT_PROFILE'
function requestEditProfile(detail) {
  return {
    type: REQUEST_EDIT_PROFILE,
    detail,
  }
}

function receiveEditProfile(detail, data) {
  return {
    type: RECEIVE_EDIT_PROFILE,
    detail,
    data,
  }
}

export function EditProfile(detail, profile) {
  return (dispatch) => {
    dispatch(requestEditProfile(detail))
    const headers = {
      Authentication: detail.data.authentication,
      'Content-Type': 'text/plain',
    }
    return Axios.put(`http://dev.generatorwisata.com/api/user/${detail.username}`, JSON.stringify(profile),{ headers })
      .then(response => dispatch(receiveEditProfile(detail, response.data)))
      .catch((err) => {
        console.log(err)
      })
  }
}
