import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./Header.module.css";
import useMediaQuery from "/src/utils/hooks";

import classNames from "classnames";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 1013px)");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    setIsMenuOpen(isMobile ? false : true);
  }, [isMobile]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleNavigationHome() {
    router.push("/home");
  }

  function handleNavigationAnimes() {
    router.push("/animes");
  }
  function handleNavigationError() {
    router.push("/404");
  }

  return (
    <header className={styles.header_content}>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleNavigationHome();
        }}
        href=""
        className="logo"
      >
        Naped
      </a>
      {isMenuOpen ? (
        <div className={styles.menu}>
          <ul>
            <li className={router.asPath == "/home" ? styles.active_link : ""}>
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
            <li
              className={router.asPath == "/animes" ? styles.active_link : ""}
            >
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
            <button
              onClick={() => router.push("/")}
              className={styles.header_btn}
            >
              Minha conta
            </button>
          </ul>
        </div>
      ) : (
        ""
      )}
      <FontAwesomeIcon
        onClick={handleToggleMenu}
        className={classNames(styles.icon_hambuguer, {
          [styles["icon_hambuguer--fixed"]]: isMobile && isMenuOpen,
        })}
        icon={faBars}
      />
    </header>
  );
}
