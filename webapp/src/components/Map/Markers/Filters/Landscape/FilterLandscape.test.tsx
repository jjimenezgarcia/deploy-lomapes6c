// Test if the component renders correctly

import { fireEvent, render, screen } from "@testing-library/react";
import { FilterLandscape } from "./FilterLandscape";

jest.mock("@inrupt/solid-client-authn-browser", () => ({
	getDefaultSession: () => ({
			info: {
				webId: "https://campa.inrupt.net/profile/card#me",
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

describe("FilterRestaurant component", () => {
  it("should render the button with the correct image", () => {
    const { getByRole } = render(<FilterLandscape />);
    const button = getByRole("button");
    const image = getByRole("img");
    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/2795/2795602.png"
    );
  });

});