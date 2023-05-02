import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import UserLogin from "../../../Solid/User/UserLogin";

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
        <UserLogin />
      </div>
      
    </div>
  );
}