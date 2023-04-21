import "./WelcomePage.css";
import WelcomeText from "./subcomponents/WelcomeText";
import WelcomeSolid from "./subcomponents/WelcomeSolid";
import { OSMap, ShowMarkers } from "../Map/OSMap";
import "aos/dist/aos.css";
import { useSession } from "@inrupt/solid-ui-react";
import { getFriendsFromPod, readFromFriendDataSet } from "../Solid/ReadFromPod";
import { useState } from "react";

export default function WelcomePage() {
  const { session } = useSession();
  const [markers, setMarkers] = useState("" as any);

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
          <button onClick={async () => {
            let friendMarkers = new Array()
            getFriendsFromPod().then( (friends : any) => {
              console.log(friends)
              /*
              friends.forEach((e : any) => {
                readFromFriendDataSet(e).then( (element : any) => {
                  friendMarkers.push(element)
                })
              });
              */
            })

          //setMarkers(friendMarkers);
          //ShowMarkers(markers);
        }}> 
        Amigos
          </button>
          <div className="map" data-aos="fade-down">
            <OSMap />
          </div>
        </div>
      )}
    </div>
  );
}
