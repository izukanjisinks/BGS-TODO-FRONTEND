import AddTodo from "../add-todo/add-todo";
import RenderTodos from "../get-todos/get-todos";
import styles from "./css/homepage.module.css";
import dashboardimg from "../assets/dashboard.png";
import logo from "../assets/bgs.png";
import plusIcon from "../assets/plus.png"
import logoutIcon from "../assets/logout.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../redux/todos/todoThunks";

const HomePage = () => {

  const {isLoading, todos, isError} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []); // [] means it will only run once when the component mounts

  const [addTodo, setAddTodo] = useState(false);
  const handleAddTodo = () => {
    setAddTodo(!addTodo);
  }

  if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching todos.</p>;
    
    return (
      <div className={styles.container}>

       {addTodo ? <AddTodo/> : null} 

        <div className={styles.sidebar}>
            <div className={styles.logo}>
            <img src={logo} alt="" className={styles.logoImg} />
            BGS TODOS
            </div> 

            <div className={styles.sidebarlinks}>
              <div className={styles.sidebarlink}>
                  <img src={dashboardimg} alt="" className={styles.linkImg} />
                  DASHBOARD
              </div>
              <div className={styles.sidebarlink}>
                  <img src={logoutIcon} alt="" className={styles.linkImg} />
                  LOG OUT
              </div>
            </div>
          
          </div>
        <main className={styles.main}>
          <div className={styles.todosHeader}>
            <h3>My TODOS</h3>
            <button className={styles.newTodoBtn} onClick={handleAddTodo}>
              <img src={plusIcon} alt="" className={styles.plusImg} />
              NEW TODO
              </button>
          </div>

         <div className={styles.listContainer}>
          <div className={styles.listBackgroundContainer}>
            <RenderTodos todos={todos} category='completed'/>
          </div>  
          <div className={styles.listBackgroundContainer}>
            <RenderTodos todos={todos} category='incomplete'/>
          </div>
          <div className={styles.listBackgroundContainer}></div>
         </div>
        </main>
      </div>
    );
}

export default HomePage;
