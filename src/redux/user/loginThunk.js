import $ from "jquery";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await $.ajax({
        url: "http://localhost/BGS-TODO/backend/users/login_user.php", // Replace with your real API URL
        method: "POST",
        data: formData,
        dataType: "json"
      });
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.responseJSON || error.message);
    }
  }
);
