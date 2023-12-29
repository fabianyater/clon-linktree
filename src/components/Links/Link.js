import React from 'react';
import { useTheme } from '../../context/ThemeProvider';
import SvgIcon from '../SvgIcon/SvgIcon';
import styles from './Link.module.css';

export const Link = ({ icon, name, link, alt, onClick }) => {
  const { theme } = useTheme()

  return (
    <a href={link} target='_blank' rel='noreferrer' className={styles.linkContainer} data-theme={theme} >
      <img src={icon} className={styles.logo} alt={alt} />
      <p className={styles.linkName}>{name}</p>
      <div onClick={onClick}>
        <SvgIcon icon="delete" />
      </div>
    </a>
  )
}