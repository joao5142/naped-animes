import Image from "next/image";
import styles from "./Post.module.css";

export default function Post(props) {
  return (
    <section className={styles.section_post}>
      <p className={styles.title_post}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis
        neque sed odio.Consectetur adipiscing elit
      </p>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <small className={styles.post_data}>00 de Julho de 2021</small>
        <div className={styles.image_post_container}>
          <Image src={"/assets/img/18.svg"} layout="fill" className="image" />
        </div>
      </div>
      <div>
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

      <div>
        <div className={styles.image_post_container}>
          <Image src={"/assets/img/19.svg"} layout="fill" className="image" />
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
