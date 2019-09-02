import axios from 'axios';

import {asyncActions} from '../utils/asynUtil'
import {ATTENDANCES} from '../actionTypes/attendanceActionType'
import {attendanceConstants} from '../constants/Constants'
import {token} from '../helpers/Auth'

export const fetchAllClockedEvents = () => dispatch => {
  dispatch(asyncActions(ATTENDANCES).loading(true))

  axios.get(attendanceConstants.ATTENDANCES, {headers: {Authorization: token}})
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(ATTENDANCES).success(response.data))
        dispatch(asyncActions(ATTENDANCES).loading(false))
      }
    })
    .catch(error => dispatch(asyncActions(ATTENDANCES).failure(true, error.response.data.message)))
}
