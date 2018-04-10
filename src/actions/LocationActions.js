/**
 * Created by iampamungkas on 4/5/18.
 */

export const REQUEST_LOCATION_DATA = 'REQUEST_LOCATION_DATA'
export const RECEIVE_LOCATION_DATA = 'RECEIVE_LOCATION_DATA'
function requestLocationData(detail) {
  return {
    type: REQUEST_LOCATION_DATA,
    detail,
  }
}

function receiveLocationData(detail, data) {
  return {
    type: RECEIVE_LOCATION_DATA,
    detail,
    data,
  }
}

export function LocationData(detail) {
  return (dispatch) => {
    dispatch(requestLocationData(detail))
    const headers = {
      Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
      'Content-Type': 'text/plain',
    }
    return Axios.get(`http://api.generatorwisata.com/api/location/${detail.location_id}`, { headers })
      .then((response) => {
        dispatch(receiveLocationData(detail, response.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const REQUEST_LOCATION_LIKE = 'REQUEST_LOCATION_LIKE'
export const RECEIVE_LOCATION_LIKE = 'RECEIVE_LOCATION_LIKE'
function requestLocationLike(detail) {
  return {
    type: REQUEST_LOCATION_LIKE,
    detail,
  }
}

function receiveLocationLike(detail, data) {
  return {
    type: RECEIVE_LOCATION_LIKE,
    detail,
    data,
  }
}

export function LocationLike(detail) {
  return (dispatch) => {
    dispatch(requestLocationLike(detail))
    const headers = {
      Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
      'Content-Type': 'text/plain',
    }
    return Axios.get(`http://api.generatorwisata.com/api/locations/like?key=${detail.key}`, { headers })
      .then((response) => {
        dispatch(receiveLocationLike(detail, response.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
