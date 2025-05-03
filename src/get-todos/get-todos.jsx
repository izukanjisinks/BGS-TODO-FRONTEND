import {useState, useEffect} from 'react';
import $, { get } from "jquery";
import TodoCard from './components/todo-card';

const GetTodos = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost/React/BGS%20TODO/sandbox.php",
      dataType: "json",
      success(data) {
        setTodos(data);
        console.log("AJAX success:", data);
      },
      error(status, error) {
        console.error("AJAX error:", status, error);
      }
    });
  }

  useEffect(() => {
     getTodos();
  });

  return (
    <div>
        
        {todos.map((todo) => (
        //   <li key={todo.id}>
        //     <h3>{todo.title}</h3>
        //     <p>{todo.description}</p>
        //     <p>{todo.completed == 1 ? 'Completed' : 'Incomplete'}</p>
        //   </li>
        <TodoCard
        id={todo.id}
        title={todo.title}
        description={todo.description}  
        completed={todo.completed}
        />
        ))}
      
      
    </div>
  )
}

export default GetTodos
