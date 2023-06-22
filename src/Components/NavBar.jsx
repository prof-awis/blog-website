import React from "react";
import { Link } from "react-router-dom";
import "../Components Css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/createpost"}>Create Post</Link>
          </li>
          <li>
            {" "}
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
