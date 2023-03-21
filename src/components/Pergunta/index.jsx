import styles from './Pergunta.module.css'
import React, { useState } from 'react'

export default function Pergunta({ pergunta, children }) {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };

  return (
        <div className={styles.container__pergunta}>
            <h6 className={styles.h6} onClick={handleClick}>{pergunta}</h6>
            {isOpen && <p className={styles.p}>{children}</p>}
        </div>
  )
}