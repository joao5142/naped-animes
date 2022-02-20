import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const menuShow = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    console.log(router.asPath);
  }, []);
  const handleToggleMenu = () => {
    if (!menuIsOpen) {
      menuShow.current.style.position = "relative";

      menuShow.current.style.width = "100%";
      menuShow.current.style.display = "flex";
      menuShow.current.style.justifyContent = "center";
      menuShow.current.style.alignItems = "center";
      setMenuIsOpen(true);
    } else {
      menuShow.current.style.display = "none";
      setMenuIsOpen(false);
    }
  };

  function handleNavigationHome() {
    router.push("/");
  }

  function handleNavigationAnimes() {
    router.push("/animes");
  }
  function handleNavigationError() {
    router.push("/error");
  }

  return (
    <header className={styles.header_content}>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleNavigationHome();
        }}
        href=""
        className={styles.header_logo}
      >
        Naped
      </a>
      <ul ref={menuShow}>
        <li className={router.asPath == "/" ? styles.active_link : ""}>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleNavigationHome();
            }}
            href=""
          >
            {" "}
            Home
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleNavigationError();
            }}
            href=""
          >
            {" "}
            Séries
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleNavigationError();
            }}
            href=""
          >
            {" "}
            Filmes
          </a>
        </li>
        <li className={router.asPath == "/animes" ? styles.active_link : ""}>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleNavigationAnimes();
            }}
            href=""
          >
            {" "}
            Animes
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleNavigationError();
            }}
            href=""
          >
            {" "}
            Games
          </a>
        </li>
        <button className={styles.header_btn}>Minha conta</button>
      </ul>
      <FontAwesomeIcon
        onClick={handleToggleMenu}
        className={styles.icon_hambuguer}
        icon={faBars}
      />
    </header>
  );
}
