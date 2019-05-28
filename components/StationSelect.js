import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { SELECT_STATION } from '../constants'
import StationOption from './StationOption'

const StationSelect = ({ stations, dispatch }) => (
  <form className={'pure-form'}>
    <select onChange={(e) => e.target.value == '' ? null : dispatch({type: SELECT_STATION, payload: e.target.value }) }>
      <StationOption name="Select Your Station" abbr={''} isPlaceHolder={ true } />
      { stations.map(({name, abbr}) => (
          <StationOption key={'stationOption_' + abbr}
              name={name} abbr={abbr} value={abbr} />
        ))
      }
    </select>
  </form>
)

export default connect(state => ({stations: state.station.all}))(StationSelect)
