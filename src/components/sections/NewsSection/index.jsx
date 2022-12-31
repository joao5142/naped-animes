import CardLarge from "/src/components/cards/CardLarge";
import styles from "./NoticesSection.module.css";

import { useRouter } from "next/router";
import classNames from "classnames";

export default function NewsSection(props) {
  const router = useRouter();

  return (
    <div className={classNames(styles.news_container, "reveal-500")}>
      <div>
        <p className={styles.news_title}>Notícias mais recentes</p>
      </div>

      <div className={styles.news_gallery}>
        <div className={styles.flex_gallery_container}>
          <CardLarge
            onNavigateClick={() => {
              router.push("/post/1");
            }}
            buttonIsVisible={true}
            src={"/assets/img/12.png"}
          />

          <CardLarge buttonIsVisible={true} src={"/assets/img/13.png"} />

          <CardLarge buttonIsVisible={true} src={"/assets/img/14.png"} />
        </div>

        <div className={styles.flex_gallery_container}>
          <CardLarge buttonIsVisible={true} src={"/assets/img/15.png"} />
          <CardLarge buttonIsVisible={true} src={"/assets/img/16.png"} />

          <CardLarge buttonIsVisible={true} src={"/assets/img/17.png"} />
        </div>
      </div>
    </div>
  );
}
