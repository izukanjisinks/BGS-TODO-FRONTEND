import {createAsyncThunk } from '@reduxjs/toolkit';
import $, { data } from 'jquery';


export const fetchTodos = createAsyncThunk("todos/fetch", async (_, thunkAPI) => {
  try {
    const data = await new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: "http://localhost/BGS-TODO/backend/get_todos.php",
        dataType: "json",
        success: resolve,
        error: (xhr, status, error) => reject(new Error(error))
      });
    });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});


export const createTodo = createAsyncThunk("todos/create", async (newTodo, thunkAPI) => {
  console.log(newTodo);
  try {
    const data = await new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: "http://localhost/BGS-TODO/backend/add_todo.php",
        contentType: "application/json",
        data: JSON.stringify(newTodo),
        dataType: "json",
        success: resolve,
        error: (xhr, status, error) => reject(new Error(error))
      });
    });
    console.log(data);
    return newTodo; // add the newTodo to the current todo state
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const updateTodo = createAsyncThunk("todos/update", async (updatedTodo, thunkAPI) => {
  console.log(updatedTodo);
  try {
    const data = await new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: `http://localhost/BGS-TODO/backend/update_todo.php?id=${updatedTodo.id}`,
        contentType: "application/json",
        data: JSON.stringify(updatedTodo),
        dataType: 'json',
        success: resolve,
        error: (xhr, status, error) => reject(new Error(error))
      });
    });
    return data; 
  } catch (err) {
    console.error('Error in updateTodo thunk:', err.message);
    return thunkAPI.rejectWithValue(err.message);
  }
});


export const deleteTodo = createAsyncThunk("todos/delete", async (id, thunkAPI) => {
  try {
    const data = await new Promise((resolve, reject) => {
      $.ajax({
        type: "DELETE",
        url: `http://localhost/BGS-TODO/backend/delete_todo.php?id=${id}`,
        success: resolve,
        error: (xhr, status, error) => reject(new Error(error))
      });
    });
    console.log(data);
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
