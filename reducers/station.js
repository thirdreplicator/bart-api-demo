import { SET_CURRENT_STATION, SELECT_STATION, FETCH_STATIONS, FETCHED_STATIONS } from '../constants' 
export default (state={current_station: null, all: []}, action) => {
  switch (action.type) {
    case SET_CURRENT_STATION:
      return {...state, current_station: action.payload}
    case FETCH_STATIONS:
      return {...state, fetching: true}
    case FETCHED_STATIONS:
      return {...state, fetching: false, all: action.payload}
    default:
      return state
  }
}

