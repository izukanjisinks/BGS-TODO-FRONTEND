import React from 'react';
import styles from '../../css/auth.module.css';

const Dialog = ({title, body,status, handleDialog}) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.dialogTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.dialogBody}>
        <p>{body}</p>
      </div>
      <button className={styles.button} onClick={handleDialog}>DISMISS</button>
    </div>
  )
}

export default Dialog
