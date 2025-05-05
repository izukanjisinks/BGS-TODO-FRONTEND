import AddTodo from "../add-todo/add-todo";
import RenderTodos from "../get-todos/render-todos";
import styles from "./css/homepage.module.css";
import dashboardimg from "../assets/dashboard.png";
import logo from "../assets/bgs.png";
import plusIcon from "../assets/plus.png";
import logoutIcon from "../assets/logout.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../redux/todos/todoThunks";
import ProgressBar from "../progress-bar/progress-bar";
import { useNavigate } from "react-router-dom";

import {logout} from "../redux/user/loginSlice";

const HomePage = () => {
   const navigate = useNavigate();
  const { isLoading, todos, isError } = useSelector((state) => state.todos);
  const { user } = useSelector((state) => state.login); // Assuming `state.login` contains user info
  const dispatch = useDispatch();

  // const todoCategory = category === 'completed' ? true : false;
  const completedTodos = todos.filter((todo) => todo.completed == true);
  const incompletedTodos = todos.filter((todo) => todo.completed == false);

  useEffect(() => {
    if (!user) {
       navigate("/"); 
    } else {
      //only fetch todos with a specified user id
      dispatch(fetchTodos(user.user.id));
    }
  }, [user, dispatch]);

  const [addTodo, setAddTodo] = useState(false);
  const handleAddTodo = () => {
    setAddTodo(!addTodo);
  };

  const handleLogout = () => {
      dispatch(logout()); // Dispatch the logout action to clear user state
      localStorage.removeItem("user");
      navigate("/");
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todos.</p>;

  return (
    <div className={styles.container}>
      {addTodo ? <AddTodo handleAddTodo={handleAddTodo} /> : null}

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
          <div className={styles.sidebarlink} onClick={handleLogout}>
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

        <div className={styles.todosHeaderCategories}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryColor1}></div>
            Completed
          </div>
          <div className={styles.categoryHeader}>
            <div
              className={`${styles.categoryColor1} ${styles.categoryColor2}`}
            ></div>
            Incomplete
          </div>
          <div className={styles.categoryHeader}>
            <div
              className={`${styles.categoryColor1} ${styles.categoryColor3}`}
            ></div>
            Progress
          </div>
        </div>

        <div className={styles.listContainer}>
          <div className={styles.listBackgroundContainer}>
            <RenderTodos todos={completedTodos} category="completed" />
          </div>
          <div className={styles.listBackgroundContainer}>
            <RenderTodos todos={incompletedTodos} category="incomplete" />
          </div>
          <div className={styles.listBackgroundContainer}>
            <div className={styles.progressBar}>
              <ProgressBar
                percentage={Math.round(
                  (todos.filter((todo) => todo.completed == 1).length /
                    todos.length) *
                    100
                )}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
