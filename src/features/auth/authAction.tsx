import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginData, RegisterData } from "../../types/type";
import endpoints from "../../api/endpoint";

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data: LoginData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${endpoints.baseURL}${endpoints.login}`, data);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || "Login failed");
      }
    }
  );

  export const registerNewUser = createAsyncThunk(
    "auth/register",
    async (data: RegisterData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${endpoints.baseURL}${endpoints.register}`, data);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || "Registration failed");
      }
    }
  );

  export const logoutUser = createAsyncThunk("auth/logout", async () => {
    return null;
  });
  