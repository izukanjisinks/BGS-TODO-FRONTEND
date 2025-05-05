import {useState} from 'react'
import $ from "jquery";

import FormInput from './components/form-input';
import FormDropDown from './components/form-dropdown';

import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../redux/todos/todoThunks';

const AddTodo = ({handleAddTodo}) => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login); 
  
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        completed: "false",
        user_id: user.user.id 
      });
    
      const [result, setResult] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
          ...prevTodo,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTodo(todo));
        dispatch(handleAddTodo);
      };


  return (
    <>
       <form className='form' onSubmit={handleSubmit}>
    
        <FormInput
          label="TITLE"
          name="title"
          handleChange={handleChange}
          value={todo.title}
        />
      
        <FormInput
          label="DESCRIPTION"
          name="description"
          handleChange={handleChange}
          value={todo.description}
        />
        
        <FormDropDown 
           name="completed"
           label="COMPLETED"
           handleChange={handleChange}
           value={todo.completed} //boolean indicating wthether the task is completed or not    
        />
    
        <button className='button' type="submit" >SUBMIT</button>
        </form>
    
        <h1>{result}</h1>
    </>
  )
}

export default AddTodo;
