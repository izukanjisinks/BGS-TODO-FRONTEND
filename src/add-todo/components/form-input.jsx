import React from 'react'

const FormInput = ({name, label, value, handleChange}) => {
  return (
        <div className='formGroup'>
            <label className='labels' htmlFor="title">{label}</label>
            <input
            className='input'
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
  )
}

export default FormInput
