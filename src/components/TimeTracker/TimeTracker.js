import React from 'react'
import moment from 'moment'

const timeTracker = ({attendances}) => {
  return (
    <div className='time-tracker'>
    {attendances.length === 0 && <div><h1>You have no clock ins</h1></div>}
    { attendances.length &&
      <div className='all-clockins'>
        <table className='clock-in-table'>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
            { attendances.map((attendance, key) => {
              return (
                <tr key={key}>
                  <td> {moment(attendance.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")} </td>
                  <td> {attendance.status} </td>
                  <td> {moment(attendance.created_at).fromNow()} </td>
                  <td> Actions buttons </td>
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

export default timeTracker;
