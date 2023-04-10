import styles from "./DetalheSetores.module.css";
import pista from "./pista.png";
import pistaPremium from "./pistaPremium.png";
import cadeiras from "./cadeiras.png";
import React from "react";

export default function DetalheSetores() {
  return (
    <div className={styles.detalhes__container}>
      <h5 className={styles.h5}>Mais detalhes sobre os setores:</h5>
      <section className={styles.container}>
        <div className={styles.cards}>
            <img className={styles.img} src={pista} alt="Pessoas reunidas" />
            <h6 className={styles.h6}>Pista</h6>
            <p className={styles.p}>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
        </div>
        <div className={styles.cards}>
            <img className={styles.img} src={pistaPremium} alt="Pessoas em frente ao palco de um show" />
            <h6 className={styles.h6}>Pista Premium</h6>
            <p className={styles.p}>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
        </div>
        <div className={styles.cards}>
            <img className={styles.img} src={cadeiras} alt="Imagem de uma arquibancada" />
            <h6 className={styles.h6}>Cadeiras</h6>
            <p className={styles.p}>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
        </div>
      </section>
    </div>
  );
}
