import axios from 'axios';

import {asyncActions} from '../utils/asynUtil'
import {ATTENDANCES, CLOCK_OUT, CLOCK_IN} from '../actionTypes/attendanceActionType'
import {attendanceConstants, clockOutConstant, clockInConstant} from '../constants/Constants'
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

export const clockOut = (id, data) => dispatch => {
  dispatch(asyncActions(CLOCK_OUT).loading(true))
  axios.patch(clockOutConstant(id).CLOCK_OUT, data, {headers: {Authorization: token}})
    .then(response => {
      if (response.status === 202) {
        dispatch(asyncActions(CLOCK_OUT).success(response.data))
        dispatch(asyncActions(CLOCK_OUT).loading(false))
      }
    })
    .catch(error => dispatch(asyncActions(ATTENDANCES).failure(true, error.response.data.message)))
}

export const clockIn = (userId) => dispatch => {
  dispatch(asyncActions(CLOCK_IN).loading(true))
  axios.post(clockInConstant.CLOCK_IN, {id: userId}, {headers: {Authorization: token}})
    .then(response => {
      if (response.status === 201) {
        console.log(response)
        dispatch(asyncActions(CLOCK_IN).success(response.data))
        dispatch(asyncActions(CLOCK_IN).loading(false))
      }
    })
    .catch(error => dispatch(asyncActions(CLOCK_IN).failure(true, error.response.data.message)))
}
