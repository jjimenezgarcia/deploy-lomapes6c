import "./NavBar.css";
import lomap_icon from "../../images/lomap-icon.png";

export default function NavBar() {
  return (
    <nav>
      <div className="header_left">
        <img src={lomap_icon} alt="Logo"></img>
        <h2 className="site_title">LoMap</h2>
      </div>
      <div>
        <ul className="list">
          <li className="list_item, active">
            <a href="#">Inicio</a>
          </li>
          <li className="list_item">
            <a href="https://arquisoft.github.io/lomap_es6c/" target="_blank">
              Documentación
            </a>
          </li>
          <li className="list_item">
            <a href="#">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list">
          <li className="list_item">
            <a href="#">Sign Up</a>
          </li>
          <li className="list_item">
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
