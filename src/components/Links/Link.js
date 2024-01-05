import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import SvgIcon from '../SvgIcon/SvgIcon';
import Toggle from '../Toggle';
import styles from './Link.module.css';

export const Link = ({ icon, name, link, alt, onClick, isVisible }) => {
  const { theme } = useTheme();
  const [isToggleChecked, setIsToggleChecked] = useState(isVisible);
  const [isUserLogged, setIsUserLogged] = useState(true);
  const links = JSON.parse(localStorage.getItem("links"));
  const linkObject = links.findIndex((item) => item.name === name)

  useEffect(() => {
    setIsToggleChecked(isVisible)
  }, [isVisible]);

  const handleOnChange = (event) => {
    setIsToggleChecked(event.target.checked);

    const updateLink = [...links];
    updateLink[linkObject] = {
      ...updateLink[linkObject],
      isVisible: event.target.checked
    }

    localStorage.setItem("links", JSON.stringify(updateLink))
  }

  const shouldShowLink = isUserLogged || isVisible;

  console.log(shouldShowLink);

  return shouldShowLink && (
    <div className={styles.link_wrapper} data-theme={theme}>
      <a href={link} target='_blank' rel='noreferrer' className={styles.link_url} data-logged={isUserLogged} >
        <img src={icon} className={styles.link_icon} alt={alt} />
        <p className={styles.link_name}>{name}</p>
      </a>
      {
        isUserLogged ?
          <div className={styles.link_options}>
            <Toggle
              checked={isToggleChecked}
              onChange={handleOnChange}
              title={isToggleChecked ? "Ocultar enlace" : 'Mostrar enlace'}
            />
            <div onClick={onClick}>
              <SvgIcon icon="delete" />
            </div>
          </div>
          : isVisible &&
          <div className={styles.link_options}>
            <div>
              <SvgIcon icon="share" />
            </div>
          </div>
      }
    </div>
  )
}