import Image from "next/image";
import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.prev}>
          <Image src={"/assets/img/prev_arrow.svg"} width="12" height="12" />
        </li>
        <li className={styles.active}>1</li>
        <li>2</li>
        <li>...</li>
        <li>9</li>
        <li>10</li>
        <li className={styles.next}>
          <Image src={"/assets/img/next_arrow.svg"} width="12" height="12" />
        </li>
      </ul>
    </nav>
  );
}
