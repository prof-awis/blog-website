import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <BrowserRouter>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="*" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
