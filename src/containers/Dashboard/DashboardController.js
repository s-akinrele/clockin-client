import React, { Component } from 'react';
import {connect} from 'react-redux';

import Banner from '../../components/Banner'

import {currentUser} from '../../requests/userRequest'
import {logout} from '../../helpers/Auth'

import '../../styles/dashboard.scss'

class DashboardController extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.currentUser()
  }

  onSignOut = () => {
    logout(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className='dashboard-controller'>
        <Banner
          name={this.props.user && this.props.user.user.first_name}
          onSignOut={this.onSignOut}
        />
        <div className='time-tracker-wrapper'>
            <div className='time-tracker-column'><button className='clock-in'>CLOCK IN</button></div>
            <div>
              <div className='all-clockins'>
                <table className='clock-in-table'>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td> Something </td>
                    <td> Something </td>
                    <td> Something </td>
                  </tr>
                </table>
              </div>
            </div>

        </div>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {currentUser})(DashboardController);
