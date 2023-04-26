import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    // TODO: implement login functionality

    if (username === password) {
      navigate("/dashboard");
      // navigate to dashboard page
    } else {
      alert("Please Enter the Correct Password");
    }
  };

  const handleForgotPasswordClick = () => {
    // TODO: implement forgot password functionality
  };

  return (
    <div className="login-container">
      <h3 className="w-50">Welcome to Dashboard</h3>
      <div className="input-container w-50">
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="input-container w-50">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <br />
      <div className="button-container w-75">
        <button onClick={handleLoginClick} className="w-25">
          Login
        </button>
        <button onClick={handleForgotPasswordClick}>Forgot password</button>
      </div>
    </div>
  );
}

export default Login;
