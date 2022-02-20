import CardLarge from "../CardLarge";
import styles from "./RowCardLarge.module.css";
import { useEffect } from "react";
export default function RowCardLarge(props) {
  useEffect(() => {
    console.log(props.list);
  }, [props.list]);
  return (
    <div className={styles.animes_flex_container}>
      <CardLarge buttonIsVisible={false} src={props.list[0]} />
      <CardLarge buttonIsVisible={false} src={props.list[1]} />
      <CardLarge buttonIsVisible={false} src={props.list[2]} />
    </div>
  );
}
