import CardLarge from "/src/components/cards/CardLarge";
import styles from "./ListCardLarge.module.css";

export default function ListCardLarge(props) {
  return (
    <div className={styles.animes_flex_container}>
      <CardLarge buttonIsVisible={false} src={props.list[0]} />
      <CardLarge buttonIsVisible={false} src={props.list[1]} />
      <CardLarge buttonIsVisible={false} src={props.list[2]} />
    </div>
  );
}
