import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="" className={styles.footer_logo}>
          Naped
        </a>
        <p>
          Todas as imagens de filmes, séries e etc são marcas registradas
          <br /> dos seus respectivos proprietários.
        </p>
      </div>
    </footer>
  );
}
