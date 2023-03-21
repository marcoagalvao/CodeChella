import styles from "./Ingresso.module.css";
import React, { useContext } from "react";
import logo from "./logo.png";
import sinal from "./sinal.png";
import qrcode from "./qrcode.png";
import { DadosContext } from "common/context/Dados";

export default function Ingresso() {
  const { nome, ingresso } = useContext(DadosContext);

  return (
    <div className={styles.container}>
      <h6 className={styles.h6}>
        Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento
        e divirta-se!
      </h6>
      <section className={styles.container__ingresso}>
        <div className={styles.header__ingresso}>
          <img src={logo} alt="Logo do CodeChella" />
          <img src={sinal} alt="Sinal de fechamento de tag" />
        </div>
        <div className={styles.main__ingresso}>
          <img
            className={styles.qrcode}
            src={qrcode}
            alt="Imagem de um QRCODE"
          />
          <div className={styles.infos}>
            <h6 className={styles.nome}>{nome}</h6>
            <p className={styles.p}>{ingresso}</p>
            <p className={styles.p}>Setor Pista</p>
            <p className={styles.p}>Data: 11/03</p>
            <p className={styles.p}>Local: São Paulo-SP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
