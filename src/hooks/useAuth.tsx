import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { loginUser, registerNewUser, logoutUser } from "../features/auth/authAction";
import { LoginData, RegisterData } from "../types/type";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

  const login = (data: LoginData) => {
    dispatch(loginUser(data));
  };

  const register = (data: RegisterData) => {
    dispatch(registerNewUser(data))
  }

  const logout = () => {
    dispatch(logoutUser());
  };

  return { user, token, loading, error, login, register, logout };
};