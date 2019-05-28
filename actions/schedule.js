import { SET_CURRENT_SCHEDULE, FETCHED_SCHEDULE } from '../constants'

export const setCurrentSchedule = scheduleItems => ({
  type: SET_CURRENT_SCHEDULE,
  payload: scheduleItems
})

export const fetchedSchedule = stationInfo => ({
  type: FETCHED_SCHEDULE,
  payload: stationInfo
})
