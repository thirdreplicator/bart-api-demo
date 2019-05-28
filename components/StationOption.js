import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const StationOption = ({ name, abbr, isPlaceHolder}) => (
  <option value={abbr}>
    {name}
  </option>
)

StationOption.propTypes = {
  name: PropTypes.string.isRequired,
  abbr: PropTypes.string.isRequired
}

export default connect()(StationOption)


