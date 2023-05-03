import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import FriendsPage from "./FriendsPage";
import { ShowMarkersFulfilledPromise } from "../../../OSMap";

jest.mock("../../../../Solid/ReadFromPod", () => ({
  getFriendsFromPod: jest.fn().mockResolvedValue(["https://Saulserra.inrupt.net"]),
  readFromDataSet: jest.fn().mockReturnValue([{ lat: 10, lng: 20 }, { lat: 30, lng: 40 }]),
  readFromFriendDataSet: jest.fn().mockReturnValue([{ lat: 50, lng: 60 }, { lat: 70, lng: 80 }])
}));

jest.mock("../../../OSMap", () => ({
  ShowMarkersFulfilledPromise: jest.fn()
}));

describe("FriendsPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { container } = render(<FriendsPage />);
  });
});