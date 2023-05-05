import FriendsPermissions from "./FriendsPermissions";
import RequestFriendship from "./RequestFriendship";
import "./FriendsStyles.css";
import { Container } from "@mui/material";

export function FriendHandler(){
    return (
    <div className="handler-friends">
        <Container className="left-component">
          <RequestFriendship />
        </Container>
        <Container className="right-component">
          <FriendsPermissions />
        </Container>
    </div>
    );
}