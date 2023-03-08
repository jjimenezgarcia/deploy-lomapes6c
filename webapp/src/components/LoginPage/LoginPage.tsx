import React, { useState } from 'react';
import "./LoginPage.css";

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('{username: ' + username + ', password: ' + password + '}');
  };

  return (
    <div className="login_page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p><label>
          Nombre de usuario:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label></p>
        <p><label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label></p>
        <p><button type="submit">Enviar</button></p>
      </form>
    </div>
  );
}

export default LoginForm;
