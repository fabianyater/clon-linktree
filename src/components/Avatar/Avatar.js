import React from 'react';
import styles from './Avatar.module.css'

export const Avatar = ({ img, fullname, username, description }) => {
  return (
    <div className={styles.profile}>
      <img src={img} className={styles.image} alt='User avatar' width={96} height={96} loading='lazy' fetchpriority='high' />
      <div>
        <h1 className={`${styles.text} ${styles.title}`}>{fullname}</h1>
        <h2 className={`${styles.text} ${styles.subtitle}`}>{username}</h2>
        <p className={`${styles.text} ${styles.description}`}>{description}</p>
      </div>
    </div>
  )
}