import LoginForm from "../../pages/LoginPage/LoginPage";
import { useSession } from "@inrupt/solid-ui-react";
import { writeDataToNewDataSet } from "../WriteToPod";

import React, { useState } from "react";

const RequestFriendship = () => {
  const [friendUrl, setfriendUrl] = useState<string>("");
  const { session } = useSession();
  const { webId } = session.info;

  if (!webId) {
    return <h1>Vete al login que no tas autenticado</h1>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfriendUrl("https://" + e.target.value + ".inrupt.net/profile/card#me");
  };

  return !session.info.isLoggedIn ? (
    <LoginForm />
  ) : (
    <div>
      <h1>Request Friendship</h1>
      <label htmlFor="friend">¿A quién quieres agregar?</label>
      <input
        type="text"
        onChange={handleChange}
        id="friend"
        placeholder="username"
        required
      />
      <button>
        <a
          href={friendUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Submit
        </a>
      </button>
    </div>
  );
};

export default RequestFriendship;
