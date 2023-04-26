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
import {
  addFriendPermissionsToMarker,
  createAclForMarker,
  deleteAclForDataset,
  deleteAclForMarker,
  removeFriendPermissions,
} from "../../Solid/Permissions";

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

          <button
            onClick={() => {
              removeFriendPermissions(
                "https://campa.inrupt.net/profile/card#me",
                "https://campito.inrupt.net/public/markers/prueba1"
              );
            }}
          >
            Agregar ACL
          </button>
          <div className="map" data-aos="fade-down">
            <OSMap />
          </div>
        </div>
      )}
    </div>
  );
}
