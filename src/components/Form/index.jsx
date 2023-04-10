import styles from "./Form.module.css";
import React, { useContext } from "react";
import { DadosContext } from "common/context/Dados";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const { nome, setNome, setIngresso } = useContext(DadosContext);
  const navigate = useNavigate(); 

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Preencha o formulário a seguir:</h3>

      <form className={styles.form}>
        
        <label for="nome">Nome Completo:</label>
        <input
          onChange={(evento) => setNome(evento.target.value)}
          className={styles.input}
          type="text"
          name="nome"
          id="nome"
          value={nome}
          required
        />

        <label for="email">Email:</label>
        <input className={styles.input} type="email" name="email" id="email" required/>

        <label for="ingresso">Tipo de ingresso</label>
        <select onChange={(evento) => setIngresso(evento.target.value)} name="ingressos" id="ingresso">
          <option value=""></option>
          <option value={"Inteira"}>
            Inteira
          </option>
          <option value={"Meia Entrada"}>
            Meia entrada
          </option>
        </select>

        <label for="nascimento">Data de nascimento:</label>
        <input type="date" name="nome" id="nascimento" required/>

        <div className={styles.botao}>
          <button
            disabled={nome.length < 3}
            onClick={() => {
              navigate('/seuingresso')
            }}
          >
            Avançar!
          </button>
        </div>
      </form>
    </div>
  );
}
