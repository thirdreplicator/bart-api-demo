import { put, takeEvery, takeLatest, call, all, take, select } from 'redux-saga/effects'
import { fetchSchedule, fetchStations } from './api'
import { SET_CURRENT_STATION, SELECT_STATION, SET_CURRENT_SCHEDULE, FETCH_SCHEDULE, FETCH_STATIONS } from '../constants'
import { getCurrentStation, getSchedules } from './selectors'
import { setCurrentSchedule, setCurrentStation } from '../actions'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* selectStation(action) {
  yield put(setCurrentStation(action.payload))
  yield call(fetchScheduleIfNotExists)
}

function* fetchScheduleIfNotExists() {
  let abbr = yield select( getCurrentStation )
  let schedules = yield select(getSchedules)

  if (schedules[abbr]) {
    // Reload from store if we have it already.
    yield put(setCurrentSchedule(schedules[abbr]))
  } else {
    // Fetch from API
    yield call(fetchSchedule)
  }
}

export function* watchFetchSchedule() {
  yield takeLatest(FETCH_SCHEDULE, fetchSchedule)
}

export function* watchSelectStation() {
  yield takeLatest(SELECT_STATION, selectStation)
}

export default function* rootSaga() {
  yield all([
    fetchStations(),
    watchFetchSchedule(),
    watchSelectStation(),
  ])
}

