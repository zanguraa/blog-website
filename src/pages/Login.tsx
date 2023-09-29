import React, { Dispatch, SetStateAction } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

interface LoginProps {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsAuth }: LoginProps) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", "true"); // Store the authentication state
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <h2 className="signInHeader">Sign In with Google to Continue</h2>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle as IconProp} />
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
