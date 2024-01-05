import styles from "./styles.module.css";

const Toggle = ({ label, text, title, name, onChange, checked }) => {
  return (
    <>
      <label className={styles.labelToggle}>
        <input
          checked={checked}
          type="checkbox"
          onChange={onChange}
          className={styles.toggle}
          name={name}
          title={title}
        />
        {label}
      </label>
      <span className={styles.span}>{text}</span>
    </>
  );
};

export default Toggle;
