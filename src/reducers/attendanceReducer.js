import {asyncActionName} from '../utils/asynUtil'
import {ATTENDANCES, CLOCK_OUT} from '../actionTypes/attendanceActionType'

const initialState = {attendances: [], loading: false, error: false, errorMessage: null, attendance: {}}

const attendanceReducer = (state=initialState, action) => {
  switch (action.type) {
    case asyncActionName(ATTENDANCES).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}
    case asyncActionName(ATTENDANCES).loading:
      return {...state, loading: action.payload}
    case asyncActionName(ATTENDANCES).success:
      return {...state, attendances: action.payload.attendances}
    case asyncActionName(CLOCK_OUT).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}
    case asyncActionName(CLOCK_OUT).success:
      return {...state, attendance: action.payload.attendance}
    case asyncActionName(CLOCK_OUT).loading:
      return {...state, loading: action.payload}
    default:
      return state
  }
}

export default attendanceReducer
