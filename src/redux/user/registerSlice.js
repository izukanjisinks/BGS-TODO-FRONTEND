import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./registerThunk";

const registerSlice = createSlice({
  name: "register",
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
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
        console.log("Loading...");
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = action.payload;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Registration failed.";
        console.log('error');
      });
  }
});

export const { logout } = registerSlice.actions;

export default registerSlice.reducer;
