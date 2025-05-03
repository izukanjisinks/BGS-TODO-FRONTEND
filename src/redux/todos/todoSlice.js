import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './todoThunks';

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: false,
    isError: false,
    errorMessage: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })

      .addCase(updateTodo.fulfilled, (state, action) => {
        const idx = state.todos.findIndex(t => t.id === action.payload.id);
        if (idx !== -1) state.todos[idx] = action.payload;
      })

      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(t => t.id !== action.payload);
      });
  }
});

export default todoSlice.reducer;
