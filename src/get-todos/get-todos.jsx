import {useState, useEffect} from 'react';
import $, { get } from "jquery";
import TodoCard from './components/todo-card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos/todoThunks';

const GetTodos = () => {

    const {isLoading, todos, isError} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []); // [] means it will only run once when the component mounts

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todos.</p>;

  return (
    <div>
        
        {todos.map((todo) => (
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
