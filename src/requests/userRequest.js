import axios from 'axios'

import {asyncActions} from '../utils/asynUtil'
import {LOG_IN, SIGN_UP, CURRENT_USER, SIGN_OUT} from '../actionTypes/userActionType'
import {authConstants} from '../constants/Constants'
import {token} from '../helpers/Auth'

export const loginUser = (user) => dispatch => {
  dispatch(asyncActions(LOG_IN).loading(true))

  axios.post(authConstants.LOG_IN, user)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.auth_token);
        dispatch(asyncActions(LOG_IN).success(response.data))
        dispatch(asyncActions(LOG_IN).loading(false))
      }
    })
    .catch((error) => dispatch(asyncActions(LOG_IN).failure(true, error.response.data.message)));
}

export const signupUser = (user) => dispatch => {
  dispatch(asyncActions(SIGN_UP).loading(true))

  axios.post(authConstants.SIGN_UP, user)
    .then(response => {
      if (response.status === 201) {
        localStorage.setItem('token', response.data.auth_token);
        dispatch(asyncActions(SIGN_UP).success(response.data))
        dispatch(asyncActions(SIGN_UP).loading(false))
      }
    })
    .catch(error => dispatch(asyncActions(SIGN_UP).failure(true, error.response.data.message)));
}

export const currentUser = () => dispatch => {
  dispatch(asyncActions(CURRENT_USER).loading(true))

  axios.get(authConstants.CURRENT_USER, {headers: {Authorization: token()}})
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(CURRENT_USER).success(response.data))
        dispatch(asyncActions(CURRENT_USER).loading(false))
      }
    })
    .catch(error => dispatch(asyncActions(CURRENT_USER).failure(true, error.response.data.message)))
}

export const signOut = () => dispatch => {
  localStorage.removeItem('token')
  dispatch({type: SIGN_OUT})
}