import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { LoginData } from "../types/type";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const loginData: LoginData = { email, password }; 
    login(loginData); 
  };

  const handleRegister = () => {
    navigate("/register")
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
