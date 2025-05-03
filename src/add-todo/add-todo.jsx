import {useState} from 'react'
import $ from "jquery";

import FormInput from './components/form-input';
import FormDropDown from './components/form-dropdown';

import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todos/todoThunks';

const AddTodo = () => {

  const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        completed: "false"
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

        dispatch(createTodo(todo));
        
        // e.preventDefault();
        // $.ajax({
        //   type: "POST",
        //   url: "http://localhost/React/BGS%20TODO/sandbox.php",
        //   data: todo, // send directly since it's json format
        //   success(data) {
        //     setResult(data);
        //   },
        //   error(status, error) {
        //     console.error("AJAX error:", status, error);
        //     setResult("Error submitting form");
        //   }
        // });
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
    
        <button className='button' type="submit">SUBMIT</button>
        </form>
    
        <h1>{result}</h1>
    </>
  )
}

export default AddTodo;
