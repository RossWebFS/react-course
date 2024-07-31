import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./User.module.css";

export const User = () => {
  const { user, logout } = useAuthContext();

  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
