import React from "react";
import { BrowserRouter as Route, Router, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img
              className="logo"
              src="../assets/logo1000.png"
              alt="khali hai"
            />
          </div>
          <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route
          pathname="/"
          element={
            <>
              <Header />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Signin />
            </>
          }
        />
        <Route path="/home" element={<></>} />
      </Routes>
    </Router>
  );
}
export default App;
