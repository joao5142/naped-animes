import styles from "./Button.module.css";

export default function Button({ children, onClick, width }) {
  return (
    <button
      style={{ width: width }}
      onClick={() => onClick()}
      className={styles.button}
    >
      {children}
    </button>
  );
}
