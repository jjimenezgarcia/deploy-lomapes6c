import "./WelcomePage.css";
import WelcomeText from "./subcomponents/WelcomeText";
import WelcomeSolid from "./subcomponents/WelcomeSolid";
import { OSMap } from "../Map/OSMap";
import "aos/dist/aos.css";
import { useSession } from "@inrupt/solid-ui-react";

export default function WelcomePage() {
  const { session } = useSession();

  return (
    <div className="welcome_page">
      {!session.info.isLoggedIn ? (
        <>
          <div className="welcome_text" data-aos="fade-down">
            <WelcomeText />
            <div
            className="arrow"
            onClick={() =>
              document
                .getElementById("solid")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          ></div>
          </div>
          <div className="solid" id="solid">
            <WelcomeSolid />
          </div>
        </>
      ) : (
        <div className="map-container">
          <div className="map" data-aos="fade-down">
            <OSMap />
          </div>
        </div>
      )}
    </div>
  );
}
