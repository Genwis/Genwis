/**
 * Created by iampamungkas on 11/25/17.
 */
import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  REQUEST_REGISTER,
  RECEIVE_REGISTER,
} from '../actions/userActions'
export const users = (
  state={
    isFetching: false,
    data: {},
    isLogin: false,
  },action
) => {
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