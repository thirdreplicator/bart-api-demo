import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Counter from './components/Counter'
import StationSelect from './components/StationSelect'
import ScheduleList from './components/ScheduleList'
import TrainDestinationControl from './components/TrainDestinationControl'
import Layout from './components/Layout'

const App = () => (
  <Layout>
    <StationSelect />
    <TrainDestinationControl />
    <ScheduleList />
  </Layout>
)

export default App



