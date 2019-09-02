import {asyncActionName} from '../utils/asynUtil'
import {ATTENDANCES, CLOCK_OUT, CLOCK_IN} from '../actionTypes/attendanceActionType'

import {SIGN_OUT} from '../actionTypes/userActionType'

const initialState = {attendances: [], loading: false, error: false, errorMessage: null, attendance: {}, updating: false}

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
      return {...state, updating: action.payload}

    case asyncActionName(CLOCK_IN).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(CLOCK_IN).success:
      return {...state, attendance: action.payload.attendance, attendances: [...state.attendances, action.payload.attendance]}

    case asyncActionName(CLOCK_IN).loading:
      return {...state, loading: action.payload}

    case SIGN_OUT:
      return {...initialState}

    default:
      return state
  }
}

export default attendanceReducer
