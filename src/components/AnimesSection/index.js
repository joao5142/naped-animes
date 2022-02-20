import Image from "next/image";
import CardLarge from "../CardLarge";
import Pagination from "../Pagination";
import RowCardLarge from "../RowCardLarge";
import styles from "./AnimesSection.module.css";

export default function AnimesSection() {
  return (
    <>
      <section className={styles.section_animes_header}>
        <div className={`${styles.banner_animes}`}>
          <Image src={"/assets/img/20.svg"} layout="fill" className="image" />

          <div className={styles.content_banner_container}>
            <p className={styles.banner_animes_title}>Animes</p>
            <p className={styles.banner_animes_content}>
              O Naped pode ser sua fonte de informações sobre o mundo nerd e
              outros assuntos relacionados.
            </p>
          </div>
        </div>

        <div>
          <input
            placeholder="Quer ajuda na procura? Pesquise aqui"
            type="text"
            className={styles.search_input}
          />
        </div>
      </section>

      <section className={styles.section_animes_list}>
        <RowCardLarge
          list={[
            "/assets/img/12.svg",
            "/assets/img/21.svg",
            "/assets/img/22.svg",
          ]}
        />
        <RowCardLarge
          list={[
            "/assets/img/12.svg",
            "/assets/img/21.svg",
            "/assets/img/22.svg",
          ]}
        />
        <RowCardLarge
          list={[
            "/assets/img/12.svg",
            "/assets/img/21.svg",
            "/assets/img/22.svg",
          ]}
        />
        <RowCardLarge
          list={[
            "/assets/img/12.svg",
            "/assets/img/21.svg",
            "/assets/img/22.svg",
          ]}
        />
      </section>

      <section>
        <Pagination />
      </section>
    </>
  );
}
