import React from "react";
import "./LoginPage.css";
import lomap_icon from "../../../images/lomap-icon.png";
import UserLogin from "../../User/UserLogin";

function LoginForm() {
  return (
    <div className="main_form">
      <div className="login">
        <img src={lomap_icon} alt="Logo"></img>
        <h1>Log in</h1>
        <form className="form">
          <div className="form_field">
           <UserLogin />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
