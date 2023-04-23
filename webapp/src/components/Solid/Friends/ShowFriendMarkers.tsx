import { useState } from "react";
import { ShowMarkersFulfilledPromise } from "../../Map/OSMap";
import { getFriendsFromPod, readFromDataSet, readFromFriendDataSet } from "../ReadFromPod";
import "../../Map/Markers/Filters/FilterButton.css"

function GetFriendMarkers(){

    const [markers, setMarkers] = useState(readFromDataSet());
  
    function readFromFriend(url: string){
      setMarkers(readFromFriendDataSet(url));
      markers.then((array: any) => {
        ShowMarkersFulfilledPromise(array);
      });
    }
    return(
        <button className="filter-button"
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
        <img className = "filter-button-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6X-2CYe7KZsGvf5Jv_sKJwHaHa%26pid%3DApi&f=1&ipt=a69740707746ebf75d6caf51588fe7bd2bb713b9c9a51b3f16cceb4dbcdcf81d&ipo=images" alt="" />
        </button>
    );
};

export default GetFriendMarkers;