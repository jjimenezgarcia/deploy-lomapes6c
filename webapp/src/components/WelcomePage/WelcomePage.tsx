import React from "react";
import "./WelcomePage.css";
import map from "../../images/map.png";
import { OSMap } from "../Map/OSMap";

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
        <a className="comenzar" href="#">
          Comenzar
        </a>
      </div>
      <div className="map">
        <OSMap />
      </div>
    </div>
  );
}
