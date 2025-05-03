import React from 'react'
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todos/todoThunks';
import { useSelector } from 'react-redux';

const TodoCard = ({id, title, description, completed}) => {

    const dispatch = useDispatch();

    const handleDeletion = () => {
        dispatch(deleteTodo(id));
    }

    // const deleteTodo = () => {
    //     $.ajax({
    //         type: "DELETE",
    //         url: `http://localhost/React/BGS%20TODO/sandbox.php?id=${id}`,
    //         dataType: "json",
    //         success(data) {
    //             console.log("AJAX success:", data);
    //         },
    //         error(status, error) {
    //             console.error("AJAX error:", status, error);
    //         }
    //     });
    // }


  return (
    <div className='todoCard'>
        <h3>{title}</h3>
        <p>{description}</p>        
        <p className='todoStatus'>Status: {completed == 1 ? 'Completed' : 'Incomplete'}</p>
        <div className='todoCardBtnGroup'>
            <button className='button deleteBtn' onClick={handleDeletion}>Delete</button>
            <button className='button'>Edit</button>
            <button className='button completeBtn'>Complete</button>
        </div>
    </div>
  )
}

export default TodoCard;
