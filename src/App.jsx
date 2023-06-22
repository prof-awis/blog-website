import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
