import styles from './Card.module.css'
import React from 'react'
import imagemHome from './imagem-home.png'
import Botao from 'components/Botao'

export default function Card() {
  return (
    <section className={styles.grid__container}>
        <img className={styles.grid__item} src={imagemHome} alt="Imagem de 3 pessoas tocando guitarra" />
        <div className={styles.grid__item}>
            <h2 className={styles.h2}> &lt; 11 e 12 de Março &gt; <br></br>Aluródromo de São Paulo </h2>
            <p className={styles.p}>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
            <Botao className={styles.botao}>Comprar Ingresso!</Botao>
        </div>
    </section>
  )
}
