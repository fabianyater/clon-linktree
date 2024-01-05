import styles from "./Input.module.css";

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
