import React, { Component } from 'react'
import {connect} from 'react-redux'

import Banner from '../../components/Banner'
import TimeTracker from '../../components/TimeTracker/TimeTracker'

import {currentUser} from '../../requests/userRequest'
import {fetchAllClockedEvents, clockOut, clockIn} from '../../requests/attendanceRequest'
import {logout} from '../../helpers/Auth'

import '../../styles/dashboard.scss'

class DashboardController extends Component {
  constructor() {
    super()

    this.state = {currentAttendance: null}
  }

  componentDidMount() {
    this.props.currentUser()
    this.props.fetchAllClockedEvents()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {attendances} = nextProps.attendances

    if (attendances.length) {
      return {
        currentAttendance: attendances.find(attendance => attendance.status === 'in'),
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  onSignOut = () => {
    logout(() => this.props.history.push('/'))
  }

  createOrUpdateAttendance = () => {
    const {currentAttendance} = this.state
    const {user} = this.props
    if (currentAttendance) {
      this.props.clockOut(currentAttendance.id, {status: 1})
      this.props.fetchAllClockedEvents()
    } else {
      this.props.clockIn(user.id)
    }
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
            <div className='time-tracker-column'>
              <button className='clock-in' onClick={this.createOrUpdateAttendance}>
                {this.state.currentAttendance ? 'CLOCK OUT': 'CLOCK IN'}
              </button>
            </div>

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

export default connect(mapStateToProps, {currentUser, fetchAllClockedEvents, clockOut, clockIn})(DashboardController);
