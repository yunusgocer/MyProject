import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Hoş geldin, {user.name}!</p>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
      ) : (
        <p>Yetkisiz erişim! Lütfen giriş yapın.</p>
      )}
    </div>
  );
};

export default Dashboard;
