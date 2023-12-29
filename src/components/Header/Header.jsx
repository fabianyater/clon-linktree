import { Avatar } from "../Avatar/Avatar";
import Toggle from "../Toggle/Toggle";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Toggle />
      <Avatar />
    </header>
  );
};

export default Header;
