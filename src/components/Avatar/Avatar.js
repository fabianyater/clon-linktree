import React, { useEffect, useState } from 'react';
import styles from './Avatar.module.css'
import AddUserForm from '../AddUserForm/AddUserForm';
import { useUser } from '../../context/UserProvider';

export const Avatar = () => {
  const { isUserPresent } = useUser()
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    username: '',
    description: '',
    picture: ''
  });

  useEffect(() => {
    if (isUserPresent()) {
      const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
      setUserInfo(userFromLocalStorage  )
    }
  }, [isUserPresent]);


  return (
    <div className={styles.profile}>
      <img src={userInfo.picture} className={styles.image} alt='User avatar' />
      <div>
        <h1 className={`${styles.text} ${styles.title}`}>{userInfo.fullname}</h1>
        <h2 className={`${styles.text} ${styles.subtitle}`}>@{userInfo.username}</h2>
        <p className={`${styles.text} ${styles.description}`}>{userInfo.description}</p>
      </div>
      {
        !isUserPresent() && <AddUserForm setUserInfo={setUserInfo} />
      }
    </div>
  )
}