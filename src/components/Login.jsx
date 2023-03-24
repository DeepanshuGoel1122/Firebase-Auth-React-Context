import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../utils/userAuthContext";

const Login = () => {
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const { user, googleSignInWithPopup } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignInWithPopup();
      navigate(redirectPath, { replace: true })
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="login">
      <div className="container">
        <button className="loginBtn" onClick={(e) => handleSignIn(e, 'google')}>Signin with Google</button>
      </div>
    </div>
  )
}

export default Login