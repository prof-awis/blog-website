import React from "react";
import "../Components Css/Login.css";
import NavBar from "../Components/NavBar";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home");
    });
  };
  return (
    <>
      <div className="loginPage">
        <div className="login">
          <h1>Sign In With Google To Continue</h1>
          <button className="signInButton" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
