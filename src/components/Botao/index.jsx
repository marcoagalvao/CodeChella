import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Botao.module.css'

export default function Botao({ children, destino }) {
  return (
    <Link to={destino} className={styles.botao}>
        {children}
    </Link>
  )
}
