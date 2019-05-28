import { combineReducers } from 'redux'
import schedule from './schedule'
import station from './station'

export default combineReducers({
  station,
  schedule
})
