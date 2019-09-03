import React from 'react'
import PropTypes from 'prop-types'

import '../styles/banner.scss'

const Banner = ({ name, onSignOut }) => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className="nav-brand">CLOCKIN EASY</div>
        <div className='nav-list'>
          <div className='current-user'>Welcome <strong>{name}!</strong></div>
          <button className='sign-out' onClick={onSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  )
}

Banner.propTypes = {
  name: PropTypes.string,
  onSignOut: PropTypes.func
}

export default Banner
