import styles from "./LineDay.module.css";
import React from "react";

export default function LineDay({
  titulo,
  destaque,
  atracoes1,
  atracoes2,
  atracoes3,
}) {
  return (
    <div className={styles.LineDay}>
      <div className={styles.header}>
        <hr />
        <h3 className={styles.data}>{titulo}</h3>
        <hr />
      </div>
      <div className={styles.body}>
        <h2 className={styles.destaque}>{destaque}</h2>
        <ul className={styles.atracoes1}>
          {atracoes1.map((atracao) => (
            <li className={styles.atracao1}>{atracao}</li>
          ))}
        </ul>
        <ul className={styles.atracoes2}>
          {atracoes2.map((atracao) => (
            <li className={styles.atracao2}>{atracao}</li>
          ))}
        </ul>
        <ul className={styles.atracoes3}>
          {atracoes3.map((atracao) => (
            <li className={styles.atracao3}>{atracao}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
