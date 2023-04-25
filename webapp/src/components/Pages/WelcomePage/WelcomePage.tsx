import "./WelcomePage.css";
import WelcomeText from "./subcomponents/WelcomeText";
import WelcomeSolid from "./subcomponents/WelcomeSolid";
import { OSMap, ShowMarkersFulfilledPromise } from "../../Map/OSMap";
import "aos/dist/aos.css";
import { useSession } from "@inrupt/solid-ui-react";
import {
  getAllFriendsFromPod,
  getFriendsFromPod,
  readFromDataSet,
  readFromFriendDataSet,
} from "../../Solid/ReadFromPod";
import { useState } from "react";

export default function WelcomePage() {
  const { session } = useSession();
  const [markers, setMarkers] = useState(readFromDataSet());

  function readFromFriend(url: string) {
    setMarkers(readFromFriendDataSet(url));
    markers.then((array: any) => {
      ShowMarkersFulfilledPromise(array);
    });
  }

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
          <button
            onClick={() => {
              try {
                getAllFriendsFromPod(); // TODO refaactor para usar esto
                getFriendsFromPod().then((friends: any) => {
                  friends.forEach((friend: any) => {
                    readFromFriend(friend);
                  });
                });
              } catch (error) {
                console.log(error);
              }
            }}
          >
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
