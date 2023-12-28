import React from 'react';
import styles from './Avatar.module.css'

export const Avatar = ({ fullname, username, description }) => {
  return (
    <div className={styles.profile}>
      <img src="https://avatars.githubusercontent.com/u/144021978?v=4" className={styles.image} alt='User avatar' />
      <div>
        <h1 className={`${styles.text} ${styles.title}`}>{fullname}</h1>
        <h2 className={`${styles.text} ${styles.subtitle}`}>{username}</h2>
        <p className={`${styles.text} ${styles.description}`}>{description}</p>
      </div>
    </div>
  )
}