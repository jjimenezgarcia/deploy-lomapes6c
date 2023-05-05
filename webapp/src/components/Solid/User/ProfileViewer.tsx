import "./ProfileViewer.css";
import {
  LogoutButton,
} from "@inrupt/solid-ui-react";
import {
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
 
const ProfileViewer = () => {
  return (
    <div>
      <LogoutButton>
        <Link to="/">
          <Button className="logout-button">
            Logout
          </Button>
        </Link>
      </LogoutButton>
      <Button className="friends-button">
        <Link to="/friends"> <img className="image-friends" src="https://cdn-icons-png.flaticon.com/512/1000/1000380.png" alt="" /></Link>
      </Button>
    </div>
  );
};

export default ProfileViewer;
