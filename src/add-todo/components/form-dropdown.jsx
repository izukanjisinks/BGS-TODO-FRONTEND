import React from 'react'

const FormDropDown = ({name, label, value, handleChange}) => {
  return (
    <div className='formGroup'>
        <label className='labels' htmlFor="completed">{label}</label>
        <select
          className='input'
          name={name}
          value={value} //boolean indicating wthether the task is completed or not
          onChange={handleChange}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
    </div>
  )
}

export default FormDropDown
