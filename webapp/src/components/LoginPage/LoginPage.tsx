import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./LoginPage.css";
import lomap_icon from "../../images/lomap-icon.png";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("{username: " + username + ", password: " + password + "}");
    await axios.post('http://localhost:3000/login', {
      username: username,
      password: password
    });
  }

  return (
    <div className="main_form">
      <div className="login">
        <img src={lomap_icon} alt="Logo"></img>
        <h1>Log in</h1>
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
          ¿No tienes una cuenta? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
