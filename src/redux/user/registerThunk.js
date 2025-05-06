import $ from "jquery";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    console.log('registering');
    try {
      const response = await $.ajax({
        url: "http://localhost/React/BGS%20TODO/backend/users/register_user.php", 
        method: "POST",
        data: JSON.stringify(formData),
        dataType: "json"
      });
      console.log('reponse result');
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.responseJSON || error.message);
    }
  }
);
