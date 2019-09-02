import {combineReducers} from 'redux'

import user from '../reducers/userReducer'
import attendances from '../reducers/attendanceReducer'

const rootReducer = combineReducers({
  user,
  attendances
})

export default rootReducer
