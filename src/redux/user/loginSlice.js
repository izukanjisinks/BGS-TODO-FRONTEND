import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginThunk";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // Add any sync actions here if needed
    logout(state) {
      state.user = null;
      state.status = "idle";
      state.error = null;
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
        console.log("Loading...");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = action.payload;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Registration failed.";
        console.log(action.payload);
      });
  }
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
