import { SET_CURRENT_SCHEDULE, FETCHED_SCHEDULE, FETCHED_STATIONS } from '../constants'
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { getCurrentStation, getSchedules } from './selectors'
import { setCurrentSchedule, fetchedSchedule, fetchedStations } from '../actions'

const genScheduleURL = abbr => `https://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=${abbr}&key=MW9S-E7SL-26DU-VV8V&json=y`

export function *fetchSchedule() {
  let abbr = yield select(getCurrentStation)
  let url = genScheduleURL(abbr)
  let json
  const response = yield call(fetch, url)
  try {
    json = yield call([response, response.json])
  } catch(e) {
    console.log(e)
  }
  yield put(fetchedSchedule(json.root.station))

  let schedules = yield select(getSchedules)
  yield put(setCurrentSchedule(schedules[abbr]))
}

export function *fetchStations() {
  let json = {}

  try {
    const response = yield call(fetch, 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
    json = yield call([response, response.json])
  } catch(e) {
    console.log('error in fetchStations()', e)
  }
  yield put(fetchedStations(json.root.stations.station))
}
