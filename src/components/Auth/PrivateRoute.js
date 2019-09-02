import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../helpers/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default PrivateRoute
