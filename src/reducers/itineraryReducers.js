/**
 * Created by iampamungkas on 11/25/17.
 */
import {
  RECEIVE_ITINERARY,
  REQUEST_ITINERARY,
  SAVE_ITINERARY,
} from '../actions/itineraryActions'

export const itineraryByDetail = (
  state={
    isFetching: true,
    itinerary: { }
  }, action
) => {
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

export const savedItinerary = (
  state = {
    listItinerary: []
  }, action
) => {
  switch (action.type) {
    case SAVE_ITINERARY:
      return {
        ...state,
        listItinerary: {...state.listItinerary, ...action.itinerary},
      }
    default:
      return state;
  }
}