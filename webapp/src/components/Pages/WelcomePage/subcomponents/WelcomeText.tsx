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
          LoMap te permite guardar tus lugares favoritos y compartirlos con tus amigos.
          Para que no olvides dónde has estado.
          Ni dónde quieres estar.
        </p>
        <UserLogin />
      </div>
      
    </div>
  );
}
