import styles from "./Input.module.css";

export default function LoginHome({ type, name, placeholder }) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
}
