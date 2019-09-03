import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SignInController extends Component {
  handleClick = () => {
    this.props.onChangeMode('sign-up');
  }

  render() {
    const {handleChange, handleLogin, error, errorMessage, loading} = this.props
    return (
      <div className='auth-controller'>
        <h1 className="auth-introduction-text">CLOCKIN EASY</h1>
        {error && <div className='error-message'>{errorMessage}</div>}
        <div className='auth-card'>
          <div className="form-group">
            <label> Email </label>
            <input
              name='email'
              type='email'
              className='form-control'
              placeholder='Enter email'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label> Password </label>
            <input
              name='password'
              type='password'
              className='form-control'
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className='call-to-action'>
            <button className="btn btn-primary auth-btn" onClick={handleLogin}>{loading ? '...LOADING' : 'SIGN IN'}</button>
            <div className="form-text"> or <Link to="#" className="card-link" onClick={this.handleClick}>SIGN UP</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

SignInController.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleLogin: PropTypes.func,
  loading: PropTypes.bool,
  onChangeMode: PropTypes.func
}


export default SignInController;
