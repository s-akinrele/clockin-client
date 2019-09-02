import {asyncActionName} from '../utils/asynUtil'
import {ATTENDANCES} from '../actionTypes/attendanceActionType'

const initialState = {attendances: [], loading: false, error: false, errorMessage: null}

const attendanceReducer = (state=initialState, action) => {
  switch (action.type) {
    case asyncActionName(ATTENDANCES).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}
    case asyncActionName(ATTENDANCES).loading:
      return {...state, loading: action.payload}
    case asyncActionName(ATTENDANCES).success:
      return {...state, attendances: action.payload.attendances}
    default:
      return state
  }
}

export default attendanceReducer
