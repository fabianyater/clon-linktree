import { useEffect } from 'react';
import styles from './App.module.css';

import { Avatar } from './components/Avatar/Avatar';
import { Link } from './components/Links/Link';
import SvgIcon from './components/SvgIcon/SvgIcon';
import { useTheme } from './context/ThemeProvider';
import { Links } from './utils/links';
import { User } from './utils/user';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <div className={styles.bgTop}>
        <div className={styles.bgBottom}>
        </div>
      </div>
      <div className={styles.container} data-theme={theme}>
        <header className={styles.header}>
          <Avatar
            fullname={User.name}
            username={User.username}
            description={User.description}
          />
        </header>
        <main>
          <ul className={styles.list}>
            {Links.map((item, index) => {
              return (
                <li className={styles.listItem}>
                  <Link
                    key={index}
                    icon={item.icon}
                    name={item.name}
                    link={item.link}
                    alt=""
                  ></Link>
                </li>
              );
            })}
          </ul>
        </main>
        <footer>
          <button className={styles.button} onClick={toggleTheme}>
            {theme === 'light' ? <SvgIcon icon={"lightTheme"} /> : <SvgIcon icon={"darkTheme"} />}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
