import { FETCHED_STATIONS, SET_CURRENT_STATION } from '../constants'

export const fetchedStations = stations => ({
  type: FETCHED_STATIONS,
  payload: tidyUpStationsForDropDown(stations)
})

export const setCurrentStation = stationAbbreviation => ({
  type: SET_CURRENT_STATION,
  payload: stationAbbreviation
})

const tidyUpStationsForDropDown = (stations) => {
  return stations.map(({name, abbr}) => ({name, abbr}))
    .sort( (a, b) => a.name.localeCompare(b.name) )
}
