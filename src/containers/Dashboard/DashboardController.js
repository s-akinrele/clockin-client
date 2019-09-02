import React, { Component } from 'react'
import {connect} from 'react-redux'

import Banner from '../../components/Banner'
import TimeTracker from '../../components/TimeTracker/TimeTracker'

import {currentUser} from '../../requests/userRequest'
import {fetchAllClockedEvents} from '../../requests/attendanceRequest'
import {logout} from '../../helpers/Auth'

import '../../styles/dashboard.scss'

class DashboardController extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.currentUser()
    this.props.fetchAllClockedEvents()
  }

  onSignOut = () => {
    logout(() => this.props.history.push('/'))
  }

  render() {
    const {attendances} = this.props
    return (
      <div className='dashboard-controller'>
        <Banner
          name={this.props.user && this.props.user.user.first_name}
          onSignOut={this.onSignOut}
        />
        <div className='time-tracker-wrapper'>
            <div className='time-tracker-column'><button className='clock-in'>CLOCK IN</button></div>

          <TimeTracker attendances={attendances.attendances}/>
        </div>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  user: state.user,
  attendances: state.attendances
})

export default connect(mapStateToProps, {currentUser, fetchAllClockedEvents})(DashboardController);
