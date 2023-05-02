import { useEffect, useState } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { TextField, FormGroup, Container } from "@mui/material";
import Button from "react-bootstrap/Button";

const UserLogin = () => {
  const [idp, setIdp] = useState("https://inrupt.net");
  const [currentUrl, setCurrentUrl] = useState("https://localhost:3000/");

  useEffect(() => {
		setCurrentUrl(window.location.href);
	}, [setCurrentUrl]);

  return (
    <Container fixed>
      <LoginButton oidcIssuer={idp} redirectUrl={currentUrl}>
        <Button name="LOGIN" variant="danger" className="login-button">
          Login
        </Button>
      </LoginButton>
    </Container>
  );
}

export default UserLogin;