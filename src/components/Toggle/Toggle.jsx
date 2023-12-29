import { useTheme } from "../../context/ThemeProvider";
import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === "light" ? (
        <SvgIcon icon={"lightTheme"} />
      ) : (
        <SvgIcon icon={"darkTheme"} />
      )}
    </button>
  );
};

export default Toggle;
