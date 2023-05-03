// Test if the component renders correctly

import { render, screen } from "@testing-library/react";
import { FilterMonument } from "./FilterMonument";

jest.mock("@inrupt/solid-client-authn-browser", () => ({
	getDefaultSession: () => ({
        info: {
            webId: "https://campa.inrupt.net/profile/card#me",
        },
	}),
}));

const dbMarkers = [
  {
    id: 1,
    name: "Marker 1",
    latitude: 42.7128,
    longitude: -74.006,
    type: "shop",
  },
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
    const { getByRole } = render(<FilterMonument />);
    const button = getByRole("button");
    const image = getByRole("img");
    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/1321/1321018.png"
    );
  });

});
