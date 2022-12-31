import Image from "next/image";
import styles from "./CardLarge.module.css";
import { useState, useEffect } from "react";
export default function CardLarge(props) {
  return (
    <div
      onClick={() => {
        if (props.onNavigateClick) {
          props.onNavigateClick();
        }
      }}
      className={`${styles.card_large_container} background_linear`}
    >
      <div>
        <Image layout="fill" src={props.src} className={`image`} />
      </div>

      {props.buttonIsVisible && (
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
      )}

      <p className={styles.text_card_large}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </p>
    </div>
  );
}
