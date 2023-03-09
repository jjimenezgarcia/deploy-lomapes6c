import "./MainMenu.css";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import WelcomePage from "../WelcomePage/WelcomePage";
import Footer from "../Footer/Footer";

export default function MainMenu() {
  const [render, setRender] = useState(true);

  return (
    <div>
      {render && (
        <div id="menu">
          <div id="menu-items">
            <Link
              onClick={() => setRender(false)}
              to="/start"
              className="menu-item"
            >
              Inicio
            </Link>
            <Link
              to="https://arquisoft.github.io/lomap_es6c/"
              target="_blank"
              className="menu-item"
            >
              Documentación
            </Link>
            <Link to="/about" className="menu-item">
              Sobre Nosotros
            </Link>
            <Link to="/login" className="menu-item">
              Log in
            </Link>
          </div>
          <div id="menu-background-pattern"></div>
          <div id="menu-background-image"></div>
        </div>
      )}
    </div>
  );
}
