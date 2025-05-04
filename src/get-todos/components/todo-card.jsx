import React from 'react'
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todos/todoThunks';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const TodoCard = ({id, title, description, completed, editTodo}) => {

    const [showPopUp, setShowPopUp] = useState(false);
    const dispatch = useDispatch();

    const handleDeletion = () => {
        dispatch(deleteTodo(id));
    }

  return (
    <div className='todoCard'>
      <div className='todoCardHeader'>
        <h3 className='todoTitle'>{title}</h3>
        <div className='popUpMenuBtn' onClick={()=>setShowPopUp(!showPopUp)}>...</div>
        {showPopUp && <div className='popUpMenu'>
            <div className='popUpMenuItem' onClick={
              ()=>{editTodo(id, title, description, completed);
              setShowPopUp(!showPopUp);
              }}>Edit</div>
            <div className='divider'></div>
            <div className='popUpMenuItem' onClick={handleDeletion}>Delete</div>
        </div>}
      </div>
        
        <p className='todoDescription'>{description}</p>        
        <p className='todoStatus'>Status: {completed == 1 ? 'Completed' : 'Incomplete'}</p>
        {/* <div className='todoCardBtnGroup'>
            <button className='button deleteBtn' 
            onClick={handleDeletion}>Delete</button>
            <button className='button' onClick={()=>editTodo(id, title, description, completed)} >Edit</button>
        </div> */}
    </div>
  )
}

export default TodoCard;
