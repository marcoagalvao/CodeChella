import CabecalhoLink from 'components/CabecalhoLink'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to="./">
            <img src={logo} alt="Logo do CodeChella" />
        </Link>
        <nav className={styles.nav}>
            <CabecalhoLink url='./experiencia'>
                A experiência
            </CabecalhoLink>
            <CabecalhoLink url='./setores'>
                Mapa de Setores
            </CabecalhoLink>
            <CabecalhoLink url='./informacoes'>
                Informações
            </CabecalhoLink>
            <CabecalhoLink url='./ingresso'>
                Ingresso
            </CabecalhoLink>
        </nav>
    </header>
  )
}
