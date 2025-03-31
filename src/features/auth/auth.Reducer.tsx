import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerNewUser, logoutUser } from "./authAction";

interface AuthState {
    user: null | { id: string; name: string; email: string };
    token: string | null;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
  };

  const authReducer = createReducer(initialState, (builder) => {
    builder

    //LOGİN 
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //REGİSTER
      .addCase(registerNewUser.pending, (state)=>{
        state.loading = true
        state.error = null
      })
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.error = null
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string
      })
      
      
      //LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
      });
  });
  
  export default authReducer;