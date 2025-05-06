import React from 'react'
import styles from '../../css/add-todo.module.css'

const FormDropDown = ({name, label, value, handleChange}) => {
  return (
    <div className='formGroup'>
        <label className={styles.labels} htmlFor="completed">{label}</label>
        <select
          className={styles.input}
          name={name}
          value = {value ? "true" : "false"} 
          onChange={handleChange}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
    </div>
  )
}

export default FormDropDown
