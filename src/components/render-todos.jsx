import {useState, useEffect} from 'react';
import $, { get } from "jquery";
import TodoCard from './todo-card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, updateTodo } from '../redux/todos/todoThunks';
import FormInput from './form-components/form-input';
import FormDropDown from './form-components/form-dropdown';

const RenderTodos = ({todos, category}) => {

   


  
    const [openModel, setOpenModel] = useState(false);

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
      id : 0,
      title: '',
      description: '',
      completed: false
    })

    const handleSubmit = (e) => {
      e.preventDefault(); 
      setOpenModel(false);
      dispatch(updateTodo(todo)); 
    }

    const handleChange = (e) => {
      
      //editing or updating the todo
      const { name, value } = e.target;
      setTodo((prevTodo) => ({
        ...prevTodo,
        [name]: value
      }));
    }

    const setTodoStatus = (e) => {
      const { name, value } = e.target;
      const parsedValue = name === "completed" ? value === "true" : value;
      console.log(parsedValue);
      setTodo((prevTodo) => ({
        ...prevTodo,
        completed: parsedValue
      }));

      console.log(todo);
    };

    const editTodo = (id, title, description, completed) => {
      console.log(completed);
      setTodo((prevTodo) => ({
        ...prevTodo, // Spread the previous state to retain other properties
        id: Number(id),
        title,
        description,
        completed: completed === 1 ? true : false,
      }));

      if(!openModel) {
        console.log('open');
        setOpenModel(true);
      }
      
    }

  

  return (
    <div>
      {openModel ? 
      
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
        handleChange={setTodoStatus}
        value={todo.completed} //boolean indicating whether the task is completed or not   
        />
    
        <button className='button' type="submit">SUBMIT</button>
        </form> : null
      }

        
      {todos.map((item) => (
    <TodoCard
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}  
      completed={item.completed}
      editTodo={editTodo}
    />
))}

    </div>
  )
}

export default RenderTodos
