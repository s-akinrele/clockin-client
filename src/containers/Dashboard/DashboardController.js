import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Banner from '../../components/Banner'
import TimeTracker from '../../components/TimeTracker/TimeTracker'

import {currentUser, signOut} from '../../requests/userRequest'
import {
  clockOut,
  clockIn,
  deleteTime,
  fetchAllClockedEvents,
} from '../../requests/attendanceRequest'

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
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  componentDidUpdate(prevProps) {
    if (prevProps.attendances.attendance && prevProps.attendances.attendance.status !== this.props.attendances.attendance.status) {
      this.props.fetchAllClockedEvents()
    }
  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/')
  }

  createOrUpdateAttendance = () => {
    const {currentAttendance} = this.state
    const {user} = this.props
    if (currentAttendance) {
      this.props.clockOut(currentAttendance.id, {status: 1})
    } else {
      this.props.clockIn(user.id)
    }
  }

  handleDelete = (attendance) => {
    this.props.deleteTime(attendance.id)
  }

  render() {
    const {attendances, user} = this.props
    const allAttendances = attendances.attendances
    return (
      <div className='dashboard-controller'>
        <Banner
          name={user && user.first_name}
          onSignOut={this.onSignOut}
        />
        <div className='time-tracker-wrapper'>
            <div className='time-tracker-column'>
              <button className='clock-in' onClick={this.createOrUpdateAttendance}>
                {this.state.currentAttendance ? 'CLOCK OUT': 'CLOCK IN'}
              </button>
            </div>
          { attendances.statusMessage && <div className='notice'>{attendances.statusMessage}</div>}
          <TimeTracker
            attendances={allAttendances}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  user: state.user,
  attendances: state.attendances
})

DashboardController.propTypes = {
  currentUser: PropTypes.func,
  fetchAllClockedEvents: PropTypes.func,
  clockOut: PropTypes.func,
  clockIn: PropTypes.func,
  deleteTime: PropTypes.func,
  attendances: PropTypes.array
}

export default connect(
  mapStateToProps,
  {currentUser, fetchAllClockedEvents, clockOut, clockIn, signOut, deleteTime}
)(DashboardController);
