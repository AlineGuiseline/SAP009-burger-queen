import React from 'react';
import styles from './InfoBoxTitle.module.css';

function QuadradoTitulo(props) {
  return (
    <div className={styles.quadrado}>
      <button type="submit" onClick={props.onClick} className={styles.nomeItemTitulo}>{props.item}</button>
    </div>
  );
}

export default QuadradoTitulo;
