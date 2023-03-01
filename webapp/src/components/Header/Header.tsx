import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header_left">
        <img src="docs/images/lomapicon.png" alt="Logo"></img>
        <h2>LoMap</h2>
      </div>
      <div className="header_mid">
        <ul className="list">
          <li className="list_item">
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
      <div className="header_right">
        <ul className="list">
          <li className="list_item">
            <a href="#">Sign Up</a>
          </li>
          <li className="list_item">
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
