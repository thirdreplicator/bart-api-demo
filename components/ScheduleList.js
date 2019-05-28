import React from 'react'
import { connect } from 'react-redux'

import ScheduleItem from './ScheduleItem'

const ScheduleList = ({items}) => (
  <table className='pure-table pure-table-horizontal'>
    <thead>
      <tr>
        <td>Time</td>
        <td>Destination</td>
      </tr>
    </thead>
    <tbody>
    { !items ? '' : items.map((item, i) => (
      <ScheduleItem key={item.id} time={item['@origTime']} destination={item['@trainHeadStation']} i={i}/>
    ))}
    </tbody>
  </table>
)
const mapStateToProps = (state) => {
  const dest = state.schedule.destination
  return ({
    items: state.schedule.current.filter(item => dest ? item['@trainHeadStation'] == dest : item)
  })
}
export default connect(mapStateToProps)(ScheduleList)
