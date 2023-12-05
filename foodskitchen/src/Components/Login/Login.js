import React, { useState } from "react";
// import Usehistory from "react-router-dom";
import "./Login.css";
// import main from "../Main/Main";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // const history = Usehistory();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      // history.push("/Main");
      window.location.hash = "/Main";
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };
  return (
    <>
      <div className="login-form">
        <div className="loginformation">
          <h1>LogIn Here</h1>
          <form className="form">
            <label htmlFor="text">User Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>LogIn</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
