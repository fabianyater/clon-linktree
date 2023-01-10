import React from 'react';
import './Link.css'

export const Link = ({ image, name, link, alt }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='link_container'>
      <img src={image} className='logo' alt={alt} />
      <h1 className='link_name'>{name}</h1>
    </a>
  )
}