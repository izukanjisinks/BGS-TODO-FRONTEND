import React from 'react'
import styles from '../../css/auth.module.css'

const FormInput = ({name, label, value, handleChange,}) => {
  return (
        <div className={styles.formGroup}>
            <label className={styles.labels} htmlFor="title">{label}</label>
            <input
            className={styles.input}
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
            />
             
        </div>
  )
}

export default FormInput
