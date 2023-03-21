import Banner from "components/Banner";
import Pergunta from "components/Pergunta";
import React from "react";
import styles from "./Informacoes.module.css";
import { Link } from "react-router-dom";

export default function Informacoes() {
  return (
    <>
      <Banner imagem="informacoes" />
      <div className={styles.container}>
        <h3 className={styles.h3}>Perguntas Frequentes:</h3>

        <Pergunta pergunta="Quais serão as atrações?">
          Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o
          segundo (12/03) com bandas pop.{" "}
          <Link to="/" style={{ color: "#444444" }}>
            {" "}
            Confira o line-up em detalhes clicando neste link!
          </Link>
        </Pergunta>

        <Pergunta pergunta="Qual é a classificação etária?">
          A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que
          estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos
          não podem entrar. ‌
        </Pergunta>

        <Pergunta pergunta="Quais são os setores disponíveis?">
          Pista Premium, Pista Comum, Cadeiras térreo, Cadeiras superiores e
          Rampas
        </Pergunta>

        <Pergunta pergunta="Quais são os itens proibidos?">
          Garrafas, latas, bebidas, utensílios de armazenagem, embalagens
          rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e
          armas brancas, objetos pontiagudos, cortantes e/ou perfurantes,
          correntes e cinturões, fogos de artifício, objetos de vidro,
          substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas,
          revistas, jornais, livros e copo térmico ou similares.
        </Pergunta>

        <Pergunta pergunta="Quem tem direito a meia-entrada?">
          De acordo com a Lei Federal, têm direito ao benefício da meia-entrada
          aqueles que preencherem os requisitos e apresentarem os documentos
          comprobatórios.
        </Pergunta>
        
      </div>
    </>
  );
}
