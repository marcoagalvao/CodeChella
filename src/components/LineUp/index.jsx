import styles from "./LineUp.module.css";
import React from "react";
import LineDay from "components/LineDay";
import imagem from './lineup-imagem.png'

export default function LineUp() {
  return (
    <div className={styles.lineUp}>
      <h1>/Line-Up/</h1>
      <LineDay
        titulo="SÁBADO <11/03>"
        destaque="Post Malone"
        atracoes1={["Juice WRLD", "Drake", "Travis Scott", "Jack Harlow"]}
        atracoes2={["Matuê", "Teto", "Lil Nas X", "Chris Brown"]}
        atracoes3={["WIU", "Sidoka", "Alok", "Future"]}
      />
      <LineDay
        titulo="DOMINGO <12/03>"
        destaque="Justin Bieber"
        atracoes1={["Coldplay", "Ed Sheeran", "The Weeknd", "Rihanna"]}
        atracoes2={["The Kid LAROI", "Maroon 5", "Billie Eilish", "Dua Lipa"]}
        atracoes3={["Vitor Kley", "Shawn Mendes", "Khalid", "Bruno Mars"]}
      />
      <img className={styles.imagem} src={imagem} alt="Homem tocando guitarra" />
    </div>
  );
}
