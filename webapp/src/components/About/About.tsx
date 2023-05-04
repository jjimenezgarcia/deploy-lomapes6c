import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about" data-aos="fade-up">
      <h1>Sobre Nosotros - LoMap_ES6C</h1>
      <p>
        Somos José, Saúl, Teresa y Alejandro.<br />
        Bienvenidos a nuestra aplicación, diseñada para la asignatura de 
        Arquitectura del Software de la EII (Uniovi).<br /><br />
        Podéis ver más aplicaciones desarrolladas por nuestros compañeros haciendo click aquí: <br />
        <Link to="https://github.com/Arquisoft" target="_blank">
              <img className="githubImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG84.png&f=1&nofb=1&ipt=ee84ca305aee3fc8be7d7ea1cdd8ac1ab3ea3d6d37b2b17dac4197fb45e8c770&ipo=images" alt="" />
        </Link>
        <br /><br />
        ¡Gracias!, ¡y viajad con cuidado!
      </p>
    </div>
  );
}

export default About;