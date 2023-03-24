import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../utils/userAuthContext";
import { useEffect } from "react";

const Profile = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="profile">
      <div className="container">
        <h1>Welcome, <span>{user?.displayName}</span></h1>
        <h3>{user?.email}</h3>
        <button className="logoutBtn" onClick={logOut}>Logout</button>
      </div>
    </div>
  )
}

export default Profile