import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");

  useEffect(() => {
    // Check if the authentication state is stored in localStorage
    const storedAuth = localStorage.getItem("isAuth");
    if (storedAuth === "true") {
      setIsAuth(true);
    }
  }, []);

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      // localStorage.clear();
      localStorage.removeItem("isAuth");
      window.location.pathname = "/login";
    });
  };

  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            {" "}
            <button onClick={signUserOut}>Logout</button>
            <Link to="/createpost">Create Post
</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
