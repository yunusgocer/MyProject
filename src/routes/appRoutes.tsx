import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
