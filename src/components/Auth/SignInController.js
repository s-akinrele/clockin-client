import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Loader from '../../assets/icons/loader.gif'
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
            <button className="btn btn-primary auth-btn" onClick={handleLogin}>{loading ? <img src={Loader} alt='...loading' height='20' width='20' /> : 'SIGN IN'}</button>
            <div className="form-text"> or <Link to="#" className="card-link" onClick={this.handleClick}>SIGN UP</Link></div>
          </div>
        </div>
      </div>
    )
  }
 }

export default SignInController;
