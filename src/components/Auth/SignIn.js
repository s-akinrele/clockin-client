import React from 'react';
import { Link } from 'react-router-dom'


const signIn = ({handleChange, handleLogin, onChangeMode}) => {
  const handleClick = () => {
    onChangeMode('sign-up');
  }

  return (
    <div className='auth-controller'>
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
          <button className="btn btn-primary auth-btn" onClick={handleLogin}>Sign in</button>
          <div className="form-text"> or <Link to="#" className="card-link" onClick={handleClick}>Sign up</Link></div>
        </div>
      </div>
    </div>
  )
}

export default signIn;
