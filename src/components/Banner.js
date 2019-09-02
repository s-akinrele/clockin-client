import React from 'react'

import '../styles/banner.scss'

const banner = ({name, onSignOut}) => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='current-user'>Welcome! <strong>{name}</strong></div>
        <div className='nav-list'>
          <button className='sign-out' onClick={onSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  )
}

export default banner;
