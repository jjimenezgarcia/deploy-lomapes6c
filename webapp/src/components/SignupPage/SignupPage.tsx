import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./SignupPage.css";
import lomap_icon from "../../images/lomap-icon.png";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("{username: " + username + ", email: " + email + ", password: " + password + "}");
    await axios.post('http://localhost:3000/signup', {
      username: username,
      email: email,
      password: password
    });
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
              onChange={event => setUsername(event.target.value)}
              placeholder="username"
            />
          </div>
          <div className="form_field">
            <input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="hello@myemail.com"
            />
          </div>
          <div className="form_field">
            <input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
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
