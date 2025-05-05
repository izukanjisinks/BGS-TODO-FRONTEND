import $ from "jquery";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await $.ajax({
        url: "http://localhost/BGS-TODO/backend/users/register_user.php", // Replace with your real API URL
        method: "POST",
        data: formData,
        dataType: "json"
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.responseJSON || error.message);
    }
  }
);
