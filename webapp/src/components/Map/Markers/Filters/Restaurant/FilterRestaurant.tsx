/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { readFromDataSetUrl } from "../../../../Solid/ReadFromPod";
import { clearMarkers, ShowMarkersFromPromise } from "../../../OSMap";
import { filterByType } from "../Filter";
import "../FilterButton.css";
import { getSessionWebID } from "../../../../Solid/Session";

export function FilterRestaurant() {
  const [markers, setMarkers] = useState(readFromDataSetUrl(getSessionWebID().webId));
  return (
    <div>
      <button
        name="boton-restaurante"
        className="filter-button"
        onClick={async () => {
          clearMarkers();
          setMarkers(readFromDataSetUrl(getSessionWebID().webId));
          ShowMarkersFromPromise(filterByType(markers, "restaurant"));
        }}
      >
        <img
          className="filter-button-image"
          src="https://img.icons8.com/color/512/restaurant-.png"
        />
      </button>
    </div>
  );
}
