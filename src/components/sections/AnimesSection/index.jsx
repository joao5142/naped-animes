import Image from "next/image";
import Pagination from "/src/components/presentation/Pagination";
import ListCardLarge from "/src/components/sections/ListCardLarge";
import styles from "./AnimesSection.module.css";
import classNames from "classnames";
import { useEffect } from "react";
export default function AnimesSection() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-0", { delay: 0 });
    ScrollReveal().reveal(".reveal-100", { delay: 100, reset: true });
    ScrollReveal().reveal(".reveal-250", { delay: 250, reset: true });
    ScrollReveal().reveal(".reveal-500", { delay: 500, reset: true });
  }, []);

  return (
    <>
      <section
        className={classNames(styles.section_animes_header, "reveal-100")}
      >
        <div className={`${styles.banner_animes}`}>
          <Image
            src={"/assets/img/20.png"}
            layout="fill"
            className="image"
            alt="Imagem wallpaper"
          />

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

      <section className={classNames(styles.section_animes_list, "reveal-100")}>
        {new Array(4).fill(4).map((value) => (
          <ListCardLarge
            list={[
              "/assets/img/12.png",
              "/assets/img/21.png",
              "/assets/img/22.png",
            ]}
            key={value}
          />
        ))}
      </section>

      <section>
        <Pagination />
      </section>
    </>
  );
}
