import React from "react";
import "../Components Css/Login.css";
import NavBar from "../Components/NavBar";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };
  return (
    <>
      <NavBar />
      <div className="loginPage">
        <div className="login">
          <h1>Sign In With Google To Continue</h1>
          <button className="signInButton">Sign in with Google</button>
        </div>
      </div>
    </>
  );
};

export default Login;
