import {
  CombinedDataProvider,
  Image,
  LogoutButton,
  Text,
} from "@inrupt/solid-ui-react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import { Link } from "react-router-dom";
import { getSessionWebID } from "../Session";

const ProfileViewer = () => {
  const webId = getSessionWebID().webId;

  const buttonStyle = {
    marginTop: "2em",
    backgroundColor: "#ee7e51",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <Container fixed>
      <Link to="/" style={{ color: "#ee7e51", fontWeight: "bold" }}>
        Mi mapa
      </Link>
      <LogoutButton>
        <Button style={buttonStyle} variant="contained" color="primary">
          Logout
        </Button>
      </LogoutButton>
      <Button style={buttonStyle} variant="contained" color="primary">
        <Link to="/friends">Amigos</Link>
      </Button>
    </Container>
  );
};

export default ProfileViewer;
