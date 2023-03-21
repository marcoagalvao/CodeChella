import React from "react";
import styles from "./Rodape.module.css";
import logo from "./logo.png";
import insta from "./instagram.png";
import twitch from "./twitch.png";
import wpp from "./wpp.png";
import twitter from "./twitter.png";
import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div>
        <Link to="./">
          <img src={logo} alt="Logo do CodeChella" />
        </Link>
        <div className={styles.container__left}>
          <p>Acesse nossas redes:</p>
          <Link>
            <img src={insta} alt="Logo do instagram" />
          </Link>
          <Link>
            <img src={twitch} alt="Logo da twitch" />
          </Link>
          <Link>
            <img src={wpp} alt="Logo do WhatsApp" />
          </Link>
          <Link>
            <img src={twitter} alt="Logo do twitter" />
          </Link>
        </div>
      </div>
      <div className={styles.container__right}>
        <p className={styles.p}>Desenvolvido por Marco Antônio.</p>
        <p className={styles.p}>Projeto fictício sem fins comerciais.</p>
      </div>
    </footer>
  );
}
