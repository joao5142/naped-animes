import styles from "./HomeSection.module.css";
import Image from "next/image";
import CardMedium from "/src/components/cards/CardMedium";
import CardSmallPost from "/src/components/cards/CardSmallPost";
import CardLarge from "/src/components/cards/CardLarge";
import NewsSection from "../NewsSection";
import classNames from "classnames";
import { useEffect } from "react";

export default function HomeSection() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-0", { delay: 0 });
    ScrollReveal().reveal(".reveal-100", { delay: 100, reset: true });
    ScrollReveal().reveal(".reveal-250", { delay: 250, reset: true });
    ScrollReveal().reveal(".reveal-500", { delay: 500, reset: true });
  }, []);

  return (
    <>
      <section className={classNames(styles.info, "reveal-100")}>
        <div>
          <p className={styles.title}>
            Mundo nerd? <br /> Naped!
          </p>
          <p className="teste">
            O Naped pode ser sua fonte de informações sobre o <br />
            mundo nerd e outros assuntos relacionados.
          </p>
        </div>
      </section>

      <section className={classNames(styles.section_banner, "reveal-100")}>
        <div className={`${styles.container_banner} background_linear`}>
          <Image src="/assets/img/1.png" layout="fill" className="image" />

          <button className="btn">
            Lorem
            <style jsx>{`
              button.btn {
                padding: 4px 16px;
                position: absolute;
                top: 15px;
                left: 25px;
                cursor: pointer;
                z-index: 2;
              }
            `}</style>
          </button>

          <p className={styles.banner_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </p>
        </div>

        <div className={styles.container_card_medium}>
          <CardMedium src="/assets/img/2.png" />
          <CardMedium src="/assets/img/3.png" />
        </div>
      </section>

      <section className={classNames(styles.section_nav, "reveal-100")}>
        <div className={styles.section_nav_container_scroll}>
          <CardSmallPost src={"/assets/img/4.png"} />
          <CardSmallPost src={"/assets/img/5.png"} />
          <CardSmallPost src={"/assets/img/6.png"} />
          <CardSmallPost src={"/assets/img/7.png"} />
          <CardSmallPost src={"/assets/img/8.png"} />
          <CardSmallPost src={"/assets/img/21.png"} />
        </div>
        <div className={styles.section_nav_container_sidebar}>
          <p>Lorem ipsum dolor</p>
          <div className={styles.section_nav_sidebar_images}>
            <CardLarge buttonIsVisible={true} src={"/assets/img/9.png"} />
            <CardLarge buttonIsVisible={true} src={"/assets/img/10.png"} />
            <CardLarge buttonIsVisible={true} src={"/assets/img/11.png"} />
          </div>
        </div>
      </section>

      <section className={classNames(styles.section_news, "reveal-250")}>
        <NewsSection />
      </section>
    </>
  );
}
