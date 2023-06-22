import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components Css/NavBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const NavBar = ({ isAuth, setIsAuth }) => {
  // const [isAuth, setIsAuth] = useState(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      //cannot use navigate outside the return or browser router so  instead let me use window
      navigate("/login");
      // window.location.pathname = "/login";
    });
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to={"/home"}>Home</Link>
          </li>

          <li>
            {" "}
            _
            {!isAuth ? (
              <Link to={"/login"}>Login</Link>
            ) : (
              <>
                <li>
                  <Link to={"/createpost"}>Create Post</Link>
                </li>
                <button onClick={signUserOut}>Log Out</button>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
