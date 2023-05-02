import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./WelcomeSolid.css";

export default function WelcomeSolid() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="top">
      <div className="welcome_container" data-aos="fade-left">
        <Link
          className="welcome_card"
          id="solid-logo"
          to="https://solidproject.org/"
          target="_blank"
        >
          <img className="solid_logo_image"
            src="https://solidproject.org/assets/img/solid-emblem.svg"
            alt="Solid logo"
          />
        </Link>
        <p className="welcome_card" data-aos="fade-left">
          LoMap utiliza Solid para almacenar los datos de los mapas y de los
          usuarios. Solid es un proyecto de la W3C que permite a los usuarios
          almacenar sus datos en servidores de terceros de forma segura y
          controlar quién puede acceder a ellos. Para más información, haz click
          en su logo.
        </p>
      </div>
    </div>
  );
}
