import React from 'react'
import styles from '../../css/auth.module.css'
import logo from '../../assets/bgs.png'

const FormHeader = () => {
  return (
    <div>
      <div className={styles.loginText}>
        <img className={styles.logo} src={logo} alt="" />
        <p>BGS TODO LOGIN</p>
      </div>
    </div>
  )
}

export default FormHeader
