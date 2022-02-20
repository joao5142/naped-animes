import styles from "./HomeSection.module.css";
import Image from "next/Image";
import CardMedium from "../CardMedium";
import CardSmallPost from "../CardSmallPost";
import CardLarge from "../CardLarge";
import NewsSection from "../NewsSection";

export default function HomeSection() {
  return (
    <>
      <section className={styles.info}>
        <div>
          <p className={styles.title}>
            Mundo nerd? <br /> Naped!
          </p>
          <p>
            O Naped pode ser sua fonte de informações sobre o <br />
            mundo nerd e outros assuntos relacionados.
          </p>
        </div>
      </section>

      <section className={styles.section_banner}>
        <div className={`${styles.container_banner} background_linear`}>
          <Image src="/assets/img/1.svg" layout="fill" className="image" />

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
          <CardMedium src="/assets/img/2.svg" />
          <CardMedium src="/assets/img/3.svg" />
        </div>
      </section>

      <section className={styles.section_nav}>
        <div className={styles.section_nav_container_scroll}>
          <CardSmallPost src={"/assets/img/4.svg"} />
          <CardSmallPost src={"/assets/img/5.svg"} />
          <CardSmallPost src={"/assets/img/6.svg"} />
          <CardSmallPost src={"/assets/img/7.svg"} />
          <CardSmallPost src={"/assets/img/8.svg"} />
        </div>
        <div className={styles.section_nav_container_sidebar}>
          <p>Lorem ipsum dolor</p>
          <div className={styles.section_nav_sidebar_images}>
            <CardLarge buttonIsVisible={true} src={"/assets/img/9.svg"} />
            <CardLarge buttonIsVisible={true} src={"/assets/img/10.svg"} />
            <CardLarge buttonIsVisible={true} src={"/assets/img/11.svg"} />
          </div>
        </div>
      </section>

      <section className={styles.section_news}>
        <NewsSection />
      </section>
    </>
  );
}
