import { useEffect, useState } from "react";
import { getAllFriendsFromPod } from "../ReadFromPod";
import "./FriendsStyles.css";
import {
  addFriendPermissionsForAllMarkers,
  removeFriendPermissionsForAllMarkers,
} from "../Permissions";

export default function FriendsPermissions() {
  const [friendsUrl, setFriendsUrl] = useState<string[]>([]);

  useEffect(() => {
    getAllFriendsFromPod().then((res) => {
      if (res !== null) {
        setFriendsUrl(res);
        console.log(res);
      }
    });
  }, []);

  return (
    <div>
      {friendsUrl.map((friend) => (
        <div className="friend-item">
          <p>{getName(friend)}</p>
          <button
            className="button-access give"
            onClick={() => {
              addFriendPermissionsForAllMarkers(friend);
            }}
          >
            Dar permisos
          </button>
          <button
            className="button-access revoke"
            onClick={() => {
              removeFriendPermissionsForAllMarkers(friend);
            }}
          >
            Quitar permisos
          </button>
        </div>
      ))}
    </div>
  );
}

const getName = (url: string) => {
  const sub = url.split(".")[0];
  return sub.substring(8, sub.length);
};
