import "./Login.css";
import { useState } from "react";

import user_icon from "./assests/person.png";
import password_icon from "./assests/password.png";
import email_icon from "./assests/email.png";

const Login = () => {
  const [action, setAction] = useState<string>("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" ? (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit grey" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit grey" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
