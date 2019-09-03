const BASE_URL = process.env.REACT_APP_API_URL

export const authConstants = {
  LOG_IN: `${BASE_URL}/auth/login`,
  SIGN_UP: `${BASE_URL}/signup`,
  CURRENT_USER: `${BASE_URL}/current-user`
}

export const attendanceConstants = {
  ATTENDANCES: `${BASE_URL}/attendances`
}

export const clockOutConstant = (id) => ({CLOCK_OUT: `${BASE_URL}/attendances/${id}`})

export const clockInConstant = {CLOCK_IN: `${BASE_URL}/attendances`}

export const deleteAttendance = (id) => ({DELETE_ATTENDANCE: `${BASE_URL}/attendances/${id}`})
