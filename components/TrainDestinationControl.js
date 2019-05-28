import React, { Component } from 'react'

import { connect } from 'react-redux'
import { FILTER_BY_DESTINATION } from '../constants'
import DestinationButton from './DestinationButton'

const getDestinations = currentSchedule => {
  const destinations = {}
  currentSchedule.forEach(item => {
    destinations[item['@trainHeadStation']] = 1
  })
  return Object.keys(destinations).sort()
}

const renderAllButton = destinations => {
  if (destinations.length == 0) {
    return ''
  } else {
    return <DestinationButton key={ 'destButton_reset' } label={ 'All' } destination={ '' } />
  }
}

const renderDestinations = destinations => {
  if (destinations.length == 0) {
    return ''
  } else {
    return (destinations.map(destination =>
      <DestinationButton key={'destButton_' + destination} destination={ destination } label={ destination }/>
  ))
  }
}
const TrainDestinationControl = ({ destinations, dispatch }) => (
  <fieldset onChange={e => dispatch({type: FILTER_BY_DESTINATION, payload: e.target.value})} style={{margin: 10}} style={{ border: 'none' }}>
    { renderAllButton(destinations) }
    { renderDestinations(destinations) }
  </fieldset>
)

const mapStateToProps = state => {
  const destinations = getDestinations(state.schedule.current)
  return ({ destinations })
}

export default connect(mapStateToProps)(TrainDestinationControl)
