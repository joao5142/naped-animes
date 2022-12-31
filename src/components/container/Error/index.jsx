import Image from "next/image";
import styles from "./Error.module.css";
import Button from "/src/components/presentation/Button";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  const handleBackHome = () => {
    router.push("/home");
  };
  return (
    <>
      <header className={styles.header_content}>
        <a onClick={handleBackHome} className={styles.header_logo}>
          Naped
        </a>
        <ul>
          <li className={styles.active_link}>
            <Image src={"/assets/img/24.svg"} layout="fill" />
          </li>
          <li>
            <Image src={"/assets/img/24.svg"} layout="fill" />
          </li>
          <li>
            <Image src={"/assets/img/24.svg"} layout="fill" />
          </li>
          <li>
            <Image src={"/assets/img/24.svg"} layout="fill" />
          </li>
          <li>
            <Image src={"/assets/img/24.svg"} layout="fill" />
          </li>
        </ul>
      </header>

      <section className={styles.section_error}>
        <div className={styles.content_error}>
          <p>Tenho más notícias para você!</p>
          <p>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>

          <Button onClick={handleBackHome} width="160px">
            Voltar para Home
          </Button>
        </div>

        <div className={styles.error_container_image}>
          <div className={styles.content_image}>
            <Image src={"/assets/img/23.svg"} layout="fill" />
          </div>
          <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
        </div>
      </section>
    </>
  );
}
