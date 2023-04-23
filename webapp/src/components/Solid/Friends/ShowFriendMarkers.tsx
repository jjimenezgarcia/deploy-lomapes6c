import { useState } from "react";
import { ShowMarkersFulfilledPromise } from "../../Map/OSMap";
import { getFriendsFromPod, readFromDataSet, readFromFriendDataSet } from "../ReadFromPod";


function GetFriendMarkers(){

    const [markers, setMarkers] = useState(readFromDataSet());
  
    function readFromFriend(url: string){
      setMarkers(readFromFriendDataSet(url));
      markers.then((array: any) => {
        ShowMarkersFulfilledPromise(array);
      });
    }
    return(
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
    );
};

export default GetFriendMarkers;