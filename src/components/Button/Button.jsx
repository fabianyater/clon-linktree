import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./Button.module.css";

const Button = ({ showText, text, fullWidth, rounded, icon, type, theme, onClick }) => {
  const iconExist = !!icon;

  return (
    <button
      type={type}
      className={styles.button}
      data-full={fullWidth}
      data-rounded={rounded}
      data-icon={iconExist}
      data-theme={theme}
      onClick={onClick}
    >
      {icon && <SvgIcon icon={icon} />}
      {showText && text}
    </button>
  );
};

export default Button;
