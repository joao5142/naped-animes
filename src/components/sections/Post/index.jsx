import Image from "next/image";
import { useEffect } from "react";
import styles from "./Post.module.css";
import classNames from "classnames";

export default function Post(props) {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-0", { delay: 0, reset: true });
    ScrollReveal().reveal(".reveal-50", { delay: 50, reset: true });
    ScrollReveal().reveal(".reveal-100", { delay: 100, reset: true });
    ScrollReveal().reveal(".reveal-250", { delay: 250, reset: true });
    ScrollReveal().reveal(".reveal-500", { delay: 500, reset: true });
  }, []);

  return (
    <section className={styles.section_post}>
      <p className={styles.title_post}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis
        neque sed odio.Consectetur adipiscing elit
      </p>
      <div className={classNames("reveal-100")}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <small className={styles.post_data}>00 de Julho de 2021</small>
        <div className={styles.image_post_container}>
          <Image src={"/assets/img/18.jpg"} layout="fill" className="image" />
        </div>
      </div>
      <div className={classNames("reveal-100")}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
          odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
          ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
          pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
          dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
          gravida sagittis. Ut eleifend ornare leo et auctor.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
          odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
          ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
          pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
          dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
          gravida sagittis. Ut eleifend ornare leo et auctor.
        </p>
      </div>

      <div className={classNames("reveal-100")}>
        <div className={styles.image_post_container}>
          <Image src={"/assets/img/19.jpg"} layout="fill" className="image" />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
          odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
          ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
          pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
          dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
          gravida sagittis. Ut eleifend ornare leo et auctor.
        </p>
      </div>
    </section>
  );
}
