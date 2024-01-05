import { useTheme } from "../../context/ThemeProvider";
import { Avatar } from "../Avatar/Avatar";
import SvgIcon from "../SvgIcon/SvgIcon";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import styles from "./Header.module.css";

const Header = () => {
  const { theme } = useTheme()
  return (
    <header className={styles.header}>
      <div className={styles.options} data-theme={theme}>
        <ToggleTheme />
        <SvgIcon icon="share" />
      </div>
      <Avatar />
    </header>
  );
};

export default Header;
