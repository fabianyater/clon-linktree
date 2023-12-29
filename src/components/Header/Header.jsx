import { User } from "../../utils/user";
import { Avatar } from "../Avatar/Avatar";
import Toggle from "../Toggle/Toggle";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Toggle />
      <Avatar
        fullname={User.name}
        username={User.username}
        description={User.description}
      />
    </header>
  );
};

export default Header;
