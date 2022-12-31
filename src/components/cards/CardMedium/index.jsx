import Image from "next/image";
import styles from "./CardMedium.module.css";
export default function CardMedium(props) {
  return (
    <div className={`${styles.card_medium} background_linear`}>
      <Image src={props.src} layout="fill" className="image" />

      <button className={`btn ${styles.card_button}`}>Lorem</button>

      <p className={styles.card_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </p>
    </div>
  );
}
