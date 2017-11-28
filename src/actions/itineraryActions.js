/**
 * Created by iampamungkas on 11/25/17.
 */
export const REQUEST_ITINERARY = 'REQUEST_ITINERARY'
export const RECEIVE_ITINERARY = 'RECEIVE_ITINERARY'
export const SAVE_ITINERARY = 'SAVE_ITINERARY'

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

export function saveItinerary(itinerary) {
  return {
    type: SAVE_ITINERARY,
    itinerary
  }
}