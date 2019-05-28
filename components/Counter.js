/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FETCH_SCHEDULE, FETCH_STATIONS } from '../constants'

const Counter = ({ selected_station, dispatch }) =>
      <div>
        <button onClick={() => dispatch({type: FETCH_SCHEDULE})}>
          Fetch Schedule
        </button>
        {' '}
        <div>station: { selected_station ? selected_station : '' } </div>
      </div>

const mapStateToProps = state => {
  return ({
    selected_station: state.station.current_station
  })
}
export default connect(mapStateToProps)(Counter)
