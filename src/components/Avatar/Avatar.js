import React from 'react';
import './Avatar.css'

export const Avatar = ({ img, fullname, username, description }) => {
  return (
    <div className='profile'>
      <img src={img} className='image' alt='User avatar' width={96} height={96} loading='lazy' fetchpriority='high' />
      <div className='text'>
        <h1 className='text title'>{fullname}</h1>
        <h2 className='text subtitle'>{username}</h2>
        <p className='text description'>{description}</p>
      </div>
    </div>
  )
}