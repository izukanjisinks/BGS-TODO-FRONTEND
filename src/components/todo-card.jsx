import React from 'react'
import more from '../assets/more.png'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todos/todoThunks';
import { useState } from 'react';
import styles from '../css/add-todo.module.css'

const TodoCard = ({id, title, description, completed, editTodo}) => {

    const dispatch = useDispatch();

    const handleDeletion = () => {
        dispatch(deleteTodo(id));
    }

  return (
    <div className={styles.todoCard}>
      <div className={styles.todoCardHeader}>
        <h3 className={styles.todoTitle}>{title}</h3>
      </div>
        
        <p className={styles.todoDescription}>{description}</p>        
        <p className={styles.todoStatus}>Status: {completed == 1 ? 'Completed' : 'Incomplete'}</p>
        <div className={styles.todoCardBtnGroup}>
            <button className={`${styles.button} ${styles.deleteBtn}`} 
            onClick={handleDeletion}>Delete</button>
            <button className={styles.button} onClick={()=>editTodo(id, title, description, completed)} >Edit</button>
        </div>
    </div>
  )
}

export default TodoCard;
