/**
 * Created by iampamungkas on 11/25/17.
 */
import {
  SELECT_DETAIL,
} from '../actions/detailActions'

export const selectedDetail = (state = {
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
}, action) => {
  switch (action.type){
    case SELECT_DETAIL:
      return action.detail
    default:
      return state
  }
}