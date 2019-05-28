import React, { Component } from 'react'

const DestinationButton = ({ destination, label }) => (
  <label key={'destControl_' + destination} htmlFor={'destButton_' + destination} style={{margin: 10}}>{ label }:
    <input id={'destButton_' + destination} type='radio' name='train_destination' value={destination} style={{ margin: 3 }}/>
  </label>
)


export default DestinationButton
