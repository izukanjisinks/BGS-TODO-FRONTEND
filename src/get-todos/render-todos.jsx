import {useState, useEffect} from 'react';
import $, { get } from "jquery";
import TodoCard from './components/todo-card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, updateTodo } from '../redux/todos/todoThunks';
import FormInput from '../add-todo/components/form-input';
import FormDropDown from '../add-todo/components/form-dropdown';

const RenderTodos = ({todos, category}) => {

   const todoCategory = category === 'completed' ? 1 : 0;
    
    const [openModel, setOpenModel] = useState(false);

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
      id : 0,
      title: '',
      description: '',
      completed: false
    })

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      setOpenModel(false);
      dispatch(updateTodo(todo)); // Use the dispatch instance directly
    }

    const handleChange = (e) => {
      
      //editing or updating the todo
      const { name, value } = e.target;
      setTodo((prevTodo) => ({
        ...prevTodo,
        [name]: value
      }));
    }

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
        handleChange={handleChange}
        value={todo.completed} //boolean indicating wthether the task is completed or not   
        />
    
        <button className='button' type="submit">SUBMIT</button>
        </form> : null
      }
        
      { todos.map((todo) => (
       todo.completed == todoCategory && <TodoCard
       id={todo.id}
       title={todo.title}
       description={todo.description}  
       completed={todo.completed}
       editTodo={editTodo}
       /> 
        )
       )
      }
    </div>
  )
}

export default RenderTodos
