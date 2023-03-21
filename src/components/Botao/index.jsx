import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Botao.module.css'

export default function Botao({ children }) {
  return (
    <Link to='' className={styles.botao}>
        {children}
    </Link>
  )
}
