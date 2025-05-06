import $ from "jquery";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await $.ajax({
        url: "http://localhost/BGS-TODO-BACKEND/backend/users/login_user.php", 
        method: "POST",
        data: JSON.stringify(formData),
        dataType: "json"
      });
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.responseJSON || error.message);
    }
  }
);
