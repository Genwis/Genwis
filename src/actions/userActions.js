/**
 * Created by iampamungkas on 11/25/17.
 */
export const REQUEST_REGISTER= 'REQUEST_REGISTER'
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export const REQUEST_LOGIN= 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

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

export function loginFB(detail) {
  return dispatch =>  {
    dispatch(requestLogin(detail))
    return Axios.post('http://10.0.3.2:8000/api/users/loginFB',JSON.stringify(detail))
      .then(response => dispatch(receiveLogin(detail, response.data)))
  }
}
