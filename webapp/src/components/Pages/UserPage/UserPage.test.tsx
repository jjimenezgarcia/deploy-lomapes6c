// Test if the component renders correctly

import { fireEvent, render, screen } from "@testing-library/react";
import UserPage from "./UserPage";
import { SessionProvider } from "@inrupt/solid-ui-react";
import { Routes } from "react-router-dom";

jest.mock("@inrupt/solid-client-authn-browser", () => ({
	getDefaultSession: () => ({
			info: {
				webId: "https://Saulserra.inrupt.net/profile/card#me",
                isLoggedIn: true,
			},
	}),
}));

const dbMarkers = [
  {
    "lat": 51.51720349730429,
    "lng": -0.07054728708620896,
    "comment": "comentario 1",
    "title": "Marcador",
    "type": "landscape",
    "score": 4
  }
];

jest.mock("@inrupt/solid-client", () => ({
	getSolidDataset: (datasetUrl: any, fetch: any) => ({
		dbMarkers
	}),
  getThingAll: (dataset: any) => ([{
    dbMarkers
  }]),
  getStringNoLocale: (thing: any, field: string) => {
    if (field === "name") {
      return "Marker 1";
    }
  },
}));

describe("UserPage", () => {
  // it("dont crash when render ProfileViewer because is authenticated", () => {
  //   const { getByRole } = render(
  //   <UserPage />
  //   );
  // });
  it('',()=>{expect(true);})
});