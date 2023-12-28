import React from 'react';
import { useTheme } from '../../context/ThemeProvider';
import styles from './Link.module.css';

export const Link = ({ icon, name, link, alt }) => {
  const { theme } = useTheme()
  return (
    <a href={link} target='_blank' rel='noreferrer' className={styles.linkContainer} data-theme={theme} >
      <img src={icon} className={styles.logo} alt={alt} />
      <h1 className={styles.linkName}>{name}</h1>
    </a>
  )
}