import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todoSlice.js";


export default configureStore({
    reducer: {
        todos: todosReducer,
    },
});