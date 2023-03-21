import styles from "./Palco.module.css";
import React from "react";
import palco from "./setores.png";
import premium from "./premium.png";
import comum from "./comum.png";
import terreo from "./terreo.png";
import superiores from "./superiores.png";
import rampas from "./rampas.png";

export default function Palco() {
  return (
    <div className={styles.grid__container}>
      <div className={styles.grid__item}>
        <img src={palco} alt="Planta do palco do evento" />
      </div>
      <div className={styles.grid__item}>
          <ul className={styles.legenda__lista}>
            <li className={styles.legenda__item}>
              <h6>Legenda:</h6>
            </li>
            <li className={styles.legenda__item}>
              <img src={premium} alt="Quadrado azul" />
              <p>Pista Premium</p>
            </li>
            <li className={styles.legenda__item}>
              <img src={comum} alt="Quadrado azul" />
              <p>Pista Comum</p>
            </li>
            <li className={styles.legenda__item}>
              <img src={terreo} alt="Quadrado azul" />
              <p>Pista Térreo</p>
            </li>
            <li className={styles.legenda__item}>
              <img src={superiores} alt="Quadrado azul" />
              <p>Pista Superiores</p>
            </li>
            <li className={styles.legenda__item}>
              <img src={rampas} alt="Quadrado azul" />
              <p>Pista Rampas</p>
            </li>
          </ul>
      </div>
    </div>
  );
}
