import Image from "next/image";
import styles from "./CardSmallPost.module.css";

export default function CardSmallPost(props) {
  return (
    <div className={styles.container_card_small}>
      <div className={`${styles.card_image_container} background_linear`}>
        <Image src={props.src} layout="fill" className="image" />
        <button className={`btn ${styles.btn_card_small}`}>Lorem</button>
      </div>

      <div className={styles.container_card_post}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor...
        </p>
        <small>00/00/0000</small>
        <button className={`btn`}>
          Ler notícia
          <style jsx>{`
            button.btn {
              padding: 6px 16px;
              margin-top: 10px;
              display: block;
              z-index: 2;
            }
          `}</style>
        </button>
      </div>
    </div>
  );
}
