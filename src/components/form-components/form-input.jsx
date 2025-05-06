import React from 'react'
import styles from '../../css/add-todo.module.css'

const FormInput = ({name, label, value, handleChange, type='text'}) => {
  return (
        <div className={styles.formGroup}>
            <label className={styles.labels} htmlFor="title">{label}</label>
            <input
            className={styles.input}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
             
        </div>
  )
}

export default FormInput
