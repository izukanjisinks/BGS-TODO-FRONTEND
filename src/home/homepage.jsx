import AddTodo from "../add-todo/add-todo";
import GetTodos from "../get-todos/get-todos";
import styles from "./css/homepage.module.css";
import dashboardimg from "../assets/dashboard.png";
import logo from "../assets/bgs.png";
import plusIcon from "../assets/plus.png"
import logoutIcon from "../assets/logout.png"
import { useState } from "react";

const HomePage = () => {

  const [addTodo, setAddTodo] = useState(false);
  const handleAddTodo = () => {
    setAddTodo(!addTodo);
  }
    
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
            <GetTodos/>
          </div>  
          <div className={styles.listBackgroundContainer}></div>
          <div className={styles.listBackgroundContainer}></div>
         </div>
       
        {/* <GetTodos/> */}
        </main>
        {/* <nav >NavBar</nav>
        <aside>SideBar</aside>
        <main >
          <div >
            <h3>My TODOS</h3>
            <button >New Todo</button>
          </div>
        
          </main>
        <footer>Footer</footer> */}
      
      {/* <div className="left">
      <AddTodo/>
      </div>
      <div className="right">
      <GetTodos/>
      </div> */}


       
      </div>
    );
}

export default HomePage;
