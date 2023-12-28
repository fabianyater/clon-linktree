import React from 'react';
import styles from './Link.module.css'

export const Link = ({ image, name, link, alt }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className={styles.linkContainer}>
      <img src={image} className={styles.logo} alt={alt} />
      <h1 className={styles.linkName}>{name}</h1>
    </a>
  )
}