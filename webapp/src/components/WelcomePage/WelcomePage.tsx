import React from "react";
import "./WelcomePage.css";

export default function WelcomePage() {
  // A simple welcome page
  return (
    <div className="welcome_page">
      <h1>Bienvenido a LoMap</h1>
      <p>
        LoMap es una aplicación web que permite a los usuarios crear mapas de
        lugares de interés en una ciudad. Estos mapas pueden ser compartidos con
        otros usuarios para que puedan añadir nuevos lugares de interés o
        comentar los ya existentes.
      </p>
      <p>
        Para acceder a la aplicación, por favor, inicie sesión o cree una cuenta
        nueva.
      </p>
    </div>
  );
}
