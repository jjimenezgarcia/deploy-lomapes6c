import React from "react";
import "./WelcomePage.css";
import map from "../../images/map.png";

export default function WelcomePage() {
  return (
    <div className="welcome_page">
      <div className="welcome_left">
        <h1>Bienvenido a LoMap</h1>
        <p>
          LoMap es una aplicación web que permite a los usuarios crear mapas de
          lugares de interés en una ciudad. Estos mapas pueden ser compartidos
          con otros usuarios para que puedan añadir nuevos lugares de interés o
          comentar los ya existentes.
        </p>
        <button>Comenzar</button>
      </div>
      <div>
        <img className="image" src={map} alt="Foto del mapa" />
      </div>
    </div>
  );
}
