import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { RegisterData } from "../types/type";

const Register = () => {
  const [firstName, setFirstName] = useState("");  
  const [lastName, setLastName] = useState("");    
  const [username, setUsername] = useState("");    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const registerData: RegisterData = {
      firstName,  
      lastName,
      username,
      email,
      password
    };

    register(registerData);
  };

  

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Loading..." : "Register"}</button>
      </form>
    </div>
  );
};

export default Register;
