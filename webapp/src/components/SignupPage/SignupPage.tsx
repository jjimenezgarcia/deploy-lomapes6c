import React, { useState } from "react";
import "./SignupPage.css";
import lomap_icon from "../../images/lomap-icon.png";
import { Link } from "react-router-dom";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("{username: " + username + ", email: " + email + ", password: " + password + "}");
  };

  return (
    <div className="main_form">
      <div className="signup">
        <img src={lomap_icon} alt="Logo"></img>
        <h1>Sign up</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_field">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="username"
            />
          </div>
          <div className="form_field">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="hello@myemail.com"
            />
          </div>
          <div className="form_field">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
            />
          </div>
          <div className="form_field">
            <button type="submit">Enviar</button>
          </div>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
