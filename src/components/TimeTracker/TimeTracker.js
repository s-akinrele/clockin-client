import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const TimeTracker = ({ attendances, handleDelete }) => {
  return (
    <div className='time-tracker'>
      {!attendances.length &&
        <div className="no-clockins">
          <h1>You have no clock ins</h1>
        </div>
      }
      {!!attendances.length &&
        <div className='all-clockins'>
          <table className='clock-in-table'>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
              {attendances.map((attendance, key) => {
                return (
                  <tr key={key}>
                    <td> {moment(attendance.created_at).format("ddd, MMM Do YYYY")} </td>
                    <td> {moment(attendance.created_at).format("LTS")} </td>
                    <td> {attendance.status} </td>
                    <td> {
                      attendance.status === 'out' ?
                        moment(attendance.created_at).from(attendance.updated_at, true) : moment(attendance.created_at).fromNow()
                    } </td>
                    <td>
                        <button className="cta-delete" onClick={() => handleDelete(attendance)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

TimeTracker.propTypes = {
  attendances: PropTypes.array,
  handleDelete: PropTypes.func
}

export default TimeTracker
