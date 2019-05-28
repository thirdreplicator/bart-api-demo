import React from 'react'
import { connect } from 'react-redux'

const ScheduleItem = ({ time, destination, i }) => (
  <tr className={ i % 2 == 0 ? '' : 'pure-table-odd'}>
    <td>{ time }</td> 
    <td>{ destination }</td>
  </tr>
)

export default ScheduleItem
