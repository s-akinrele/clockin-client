import React from 'react';
import {Link} from 'react-router-dom';

const signUp = ({handleChange, onChangeMode, handleSignUp}) => {
  const handleClick = () => {
    onChangeMode('sign-in');
  }

  return (
    <div className='auth-controller'>
      <div className='auth-card'>
        <div className='form-group'>
          <label> First Name </label>
          <input
            name='first_name'
            type='text'
            className='form-control'
            placeholder='Enter first name'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label> Last Name </label>
          <input
            name='last_name'
            type='text'
            className='form-control'
            placeholder='Enter last name'
            onChange={handleChange}
          />
        </div>
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
        <div className='form-group'>
          <label> Confirm Password </label>
          <input
            name='password_confirmation'
            type='password'
            className='form-control'
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </div>
        <div className='call-to-action'>
          <button className='btn auth-btn' onClick={handleSignUp}>Sign up</button>
          <div className='form-text'> Have an account already? <Link to="#" className="auth-link" onClick={handleClick}> Sign in</Link></div>
        </div>
      </div>
    </div>
  )
}

export default signUp;
