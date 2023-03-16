import { OSMap } from "../../Map/OSMap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function WelcomeText() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="welcome_container top">
      <div className="welcome_left" data-aos="fade-down">
        <h1>Bienvenido a LoMap</h1>
        <p>
          LoMap es una aplicación web que permite a los usuarios crear mapas de
          lugares de interés en una ciudad. Estos mapas pueden ser compartidos
          con otros usuarios para que puedan añadir nuevos lugares de interés o
          comentar los ya existentes.
        </p>
        <Link className="comenzar" to="/login">
          Comenzar
        </Link>
      </div>
      <div className="map" data-aos="fade-down">
        <OSMap />
      </div>
    </div>
  );
}
