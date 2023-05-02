import { useState } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { Button, TextField, FormGroup, Container } from "@mui/material";

const UserLogin = () => {
  const [idp, setIdp] = useState("https://inrupt.net");

  const styles = {
    fontFamily: 'Roboto, sans-serif',
    color: '#d7dce4',
    borderRadius: '1em',
    backgroundColor: 'white',
    marginTop: '0.5rem',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#ee7e51',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <Container fixed>
      <FormGroup>
        <TextField
          style={styles}
          placeholder="Identity Provider"
          type="url"
          value={idp}
          onChange={(e) => setIdp(e.target.value)}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <LoginButton oidcIssuer={idp} redirectUrl={"https://arquisoft-lomap-es6c.netlify.app/start"}>
                <Button name="LOGIN" style={buttonStyle} variant="contained" color="primary">
                  Login
                  </Button>
              </LoginButton>
            ),
          }}
        />
      </FormGroup>
    </Container>
  );
}

export default UserLogin;