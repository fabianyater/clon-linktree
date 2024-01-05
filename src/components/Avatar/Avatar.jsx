import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserProvider";
import AddUserForm from "../AddUserForm/AddUserForm";
import styles from "./Avatar.module.css";
import emptyPicture from '../../images/user.png'

export const Avatar = () => {
  const { isUserPresent, imagePreview } = useUser();
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    description: "",
    picture: "",
  });

  useEffect(() => {
    if (isUserPresent()) {
      const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
      setUserInfo(userFromLocalStorage);
    }
  }, [isUserPresent]);

  return (
    <div className={styles.profile}>
      {imagePreview ? (
        <img src={imagePreview} className={styles.image} alt="User avatar" />
      ) : userInfo.picture ? (
        <img
          src={userInfo.picture}
          className={styles.image}
          alt="User avatar"
        />
      ) : (
        <img src={emptyPicture} className={styles.image} alt="User avatar" />
      )}

      <div>
        <h1 className={`${styles.text} ${styles.title}`}>
          {userInfo.fullname}
        </h1>
        <h2 className={`${styles.text} ${styles.subtitle}`}>
          {userInfo.username}
        </h2>
        <p className={`${styles.text} ${styles.description}`}>
          {userInfo.description}
        </p>
      </div>
      {!isUserPresent() && <AddUserForm setUserInfo={setUserInfo} />}
    </div>
  );
};
