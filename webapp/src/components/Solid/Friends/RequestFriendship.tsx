import React, { useState } from "react";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import "./FriendsStyles.css";

const RequestFriendship = () => {
  const [friendUrl, setfriendUrl] = useState<string>("");
  const session = getDefaultSession();
  const webId = session.info.webId;

  if (webId === null) {
    return <h1>Vete al login que no tas autenticado</h1>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfriendUrl("https://" + e.target.value + ".inrupt.net/profile/card#me");
  };

  return !session.info.isLoggedIn ? (
    <h1>Not logged in</h1>
  ) : (
    <div className="addFriend">
      <h2>Buscar amigos</h2>
      <input
        type="text"
        onChange={handleChange}
        id="friend"
        placeholder="usuario"
        required
      />
      <button>
        <a
          href={friendUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Buscar
        </a>
      </button>
    </div>
  );
};

export default RequestFriendship;
