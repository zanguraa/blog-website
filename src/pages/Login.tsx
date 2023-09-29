import React, { Dispatch, SetStateAction } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsAuth }: LoginProps) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", "true");
      navigate("/");
      console.log(result);
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
