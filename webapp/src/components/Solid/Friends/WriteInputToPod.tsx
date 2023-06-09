import React from "react";
import { writeDataToNewDataSet } from "../WriteToPod";
import { getSessionWebID } from "../Session";

// Esto es un ejemplo de commo escribir en un pod usando la funciond e writeDataToNewDataSet
const WriteInputToPod = () => {
  const { webId } = getSessionWebID();

  const podUrl =
    webId.replace("profile/card#me", "") + "private/courses/Person1";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await writeDataToNewDataSet(
      podUrl,
      "person2",
      "Persona numero 1",
      "https://schema.org/Person"
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WriteInputToPod;
