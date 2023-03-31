import LoginForm from "../../pages/LoginPage/LoginPage";
import { useSession } from "@inrupt/solid-ui-react";
import writeDataToNewDataSet from "../WriteToPod";
import React, { useState } from "react";
import { redirect } from "react-router-dom";

const RequestFriendship = () => {
  const REQUESTS_URI = "private/friends/requests/";

  const [friendUrl, setfriendUrl] = useState<string>("");
  const { session } = useSession();
  const { webId } = session.info;

  if (!webId) {
    return <h1>Vete al login que no tas autenticado</h1>;
  }
  // the username of the user who is sending the request
  const username = webId.split("/")[2].split(".")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfriendUrl("https://" + e.target.value + ".inrupt.net/" + REQUESTS_URI);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await writeDataToNewDataSet(
      friendUrl + username,
      username,
      username + " quiere ser tu amigo",
      "https://schema.org/Person"
    );
    console.log("Friendship request sent to " + friendUrl + username);
  };

  return !session.info.isLoggedIn ? (
    <LoginForm />
  ) : (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Request Friendship</h1>
        <label htmlFor="friend">¿A quién quieres agregar?</label>
        <input
          type="text"
          onChange={handleChange}
          id="friend"
          placeholder="username"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestFriendship;
