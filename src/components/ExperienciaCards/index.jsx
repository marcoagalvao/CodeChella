import styles from './ExperienciaCards.module.css'
import React from 'react'
import imagem1 from './imagem1.png'
import imagem2 from './imagem2.png'
import imagem3 from './imagem3.png'

export default function ExperienciaCards() {
  return (
    <div className={styles.grid__container}>
        <div className={styles.grid__item__rigth}>
            <img src={imagem1} alt="Mulher feliz com os braços pra cima" />
        </div>
        <div className={styles.grid__item__left}>
            <h6 className={styles.h6}>Acessibilidade e Inclusão</h6>
            <p className={styles.p}>Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
        </div>
        <div className={styles.grid__item__rigth}>
            <h6 className={styles.h6}>Sustentabilidade</h6>
            <p className={styles.p}>Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.</p>
        </div>
        <div className={styles.grid__item__left}>
            <img src={imagem2} alt="Imagem de uma sacola reciclavel com reciclaveis" />
        </div>
        <div className={styles.grid__item__rigth}>
            <img src={imagem3} alt="Imagem de uma roda gigante" />
        </div>
        <div className={styles.grid__item__left}>
            <h6 className={styles.h6}>Atrações</h6>
            <p className={styles.p}>Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!</p>
        </div>
    </div>
  )
}
