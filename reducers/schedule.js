import { FILTER_BY_DESTINATION, SET_CURRENT_SCHEDULE, FETCH_SCHEDULE, FETCHED_SCHEDULE } from '../constants' 

export default (state={all: {}, current: [], destination: null}, action) => {
  switch (action.type) {
    case FILTER_BY_DESTINATION:
      console.log('filter by destination:', action.payload)
      return {...state, destination: action.payload}
    case SET_CURRENT_SCHEDULE:
      return {...state, current: action.payload}
    case FETCH_SCHEDULE:
      return state
    case FETCHED_SCHEDULE:
      const abbr = action.payload.abbr
      action.payload.item.forEach(e => {
        e.id = 'scheduleItem_' + abbr + '_' + e['@trainId'] + '_' + e['@origTime']
      })
      return {...state, all: {...state.all, [abbr]: action.payload.item } }
    default:
      return state
  }
}

