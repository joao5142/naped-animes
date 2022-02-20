import CardLarge from "../CardLarge";
import styles from "./NoticesSection.module.css";

import { useRouter } from "next/router";

export default function NewsSection(props) {
  const router = useRouter();

  return (
    <div className={styles.news_container}>
      <div>
        <p className={styles.news_title}>Notícias mais recentes</p>
      </div>

      <div className={styles.news_gallery}>
        <div className={styles.flex_gallery_container}>
          <CardLarge
            onNavigateClick={() => {
              console.log("cliquei em card large");
              router.push("/post/1");
            }}
            buttonIsVisible={true}
            src={"/assets/img/12.svg"}
          />

          <CardLarge buttonIsVisible={true} src={"/assets/img/13.svg"} />

          <CardLarge buttonIsVisible={true} src={"/assets/img/14.svg"} />
        </div>

        <div className={styles.flex_gallery_container}>
          <CardLarge buttonIsVisible={true} src={"/assets/img/15.svg"} />
          <CardLarge buttonIsVisible={true} src={"/assets/img/16.svg"} />

          <CardLarge buttonIsVisible={true} src={"/assets/img/17.svg"} />
        </div>
      </div>
    </div>
  );
}
