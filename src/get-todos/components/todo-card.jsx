import React from 'react'
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todos/todoThunks';
import { useSelector } from 'react-redux';

const TodoCard = ({id, title, description, completed, editTodo}) => {

    const dispatch = useDispatch();

    const handleDeletion = () => {
        dispatch(deleteTodo(id));
    }

  return (
    <div className='todoCard'>
        <h3>{title}</h3>
        <p>{description}</p>        
        <p className='todoStatus'>Status: {completed == 1 ? 'Completed' : 'Incomplete'}</p>
        <div className='todoCardBtnGroup'>
            <button className='button deleteBtn' 
            onClick={handleDeletion}>Delete</button>
            <button className='button' onClick={()=>editTodo(id, title, description, completed)} >Edit</button>
            <button className='button completeBtn'>Complete</button>
        </div>
    </div>
  )
}

export default TodoCard;
