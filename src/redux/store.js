import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todoSlice.js";
import registerSlice from "./user/registerSlice.js";
import loginSlice from "./user/loginSlice.js";


export default configureStore({
    reducer: {
        todos: todosReducer,
        register: registerSlice,
        login: loginSlice,
    },
});