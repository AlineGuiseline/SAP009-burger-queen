import React from 'react';
import styles from './InfoBoxTitle.module.css';

function QuadradoTitulo({ item }) {
  return (
    <div className={styles.quadrado}>
      <div>
        <p className={styles.nomeItemTitulo}>{item}</p>
      </div>
    </div>
  );
}

export default QuadradoTitulo;
