/**
 * Created by iampamungkas on 7/24/17.
 */
import  Axios  from 'axios'
export const REQUEST_ITINERARY = 'REQUEST_ITINERARY';
export const SELECT_DETAIL = 'SELECT_DETAIL';
export const RECEIVE_ITINERARY = 'RECEIVE_ITINERARY';


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
        dispatch(requestItinerary(detail));
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(detail))
            .then(response => dispatch(receiveItinerary(detail, response.data)))
    }
}