import React from 'react'

const TodoCard = ({id, title, description, completed}) => {
  return (
    <div className='todoCard'>
        <h3>{title}</h3>
        <p>{description}</p>        
        <p className='todoStatus'>Status: {completed == 1 ? 'Completed' : 'Incomplete'}</p>
        <div className='todoCardBtnGroup'>
            <button className='button deleteBtn'>Delete</button>
            <button className='button'>Edit</button>
            <button className='button completeBtn'>Complete</button>
        </div>
    </div>
  )
}

export default TodoCard;
