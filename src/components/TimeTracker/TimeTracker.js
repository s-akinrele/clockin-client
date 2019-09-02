import React from 'react'
import moment from 'moment'

const timeTracker = ({ attendances, handleDelete }) => {
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
                        <button className="cta-delete" onClick={handleDelete}>Delete</button>
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

export default timeTracker;
