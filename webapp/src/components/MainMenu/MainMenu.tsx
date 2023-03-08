import "./MainMenu.css";
import NavBar from "../NavBar/NavBar";
import WelcomePage from "../WelcomePage/WelcomePage";
import Footer from "../Footer/Footer";

export default function MainMenu() {
  return (
    <div id="menu">
      <div id="menu-items">
        <a href="/start" className="menu-item">
          Inicio
        </a>
        <a
          href="https://arquisoft.github.io/lomap_es6c/"
          target="_blank"
          className="menu-item"
        >
          Documentación
        </a>
        <a href="/about" className="menu-item">
          Sobre Nosotros
        </a>
      </div>
      <div id="menu-background-pattern"></div>
      <div id="menu-background-image"></div>
    </div>
  );
}
