import { useEffect, useState } from "react";
import { getFriendsFromPod, readFromDataSet, readFromFriendDataSet } from "../../../../Solid/ReadFromPod";
import { ShowMarkersFulfilledPromise } from "../../../OSMap";
import "./FriendsPage.css";
export default function FriendsPage(props: any){

    const [markers, setMarkers] = useState(readFromDataSet());
    const [friends, setFriends] = useState([]);

    function readFromFriend(url: string){
        setMarkers(readFromFriendDataSet(url));
        markers.then((array: any) => {
          ShowMarkersFulfilledPromise(array);
        });
      }

    const cancelFilter = () => {
        props.onChange();
      };


    const getAllFriends = () => {
        getFriendsFromPod().then((friends: any) => {
            setFriends(friends);
        });
    }

    const clickOnFriend = (friend: string): any => {
        readFromFriend(friend);
        props.changeMapName(getFriendName(friend));
        cancelFilter();
    }
    
    useEffect(() => {
        getAllFriends();
      }, []);

    function getFriendName(url: string){
        const name = url.match(/https:\/\/(.+?)\.inrupt/);
        if (name) return name[1];
        else return "Unknown";
    }

    return (
        <div className="popupContainer">
       <div>
            <button className="cancel_button"
              onClick={cancelFilter}
            >
              <img className="cancel-button-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fimg%2Fmatt-icons_cancel.png&f=1&nofb=1&ipt=a1d797bc36ec42f99a52e4084bffc7c616bf0eee54d60f835aa29f7ba578a938&ipo=images" alt="" />
            </button>
            <div>
            <div>
                {friends.map((friend) => ( <div className ="friend-button-container">
                    <button className ="friend-button" key={friend} onClick={() => clickOnFriend(friend)}>
                    </button>
                    <div className="friend-name">{getFriendName(friend)}</div>
                    </div>
                 ))}
            </div>
    </div>
          </div>
      <div className="main_form">
      </div>
    </div>
    );
}