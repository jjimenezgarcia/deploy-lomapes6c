/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { readFromDataSet } from "../../../../Solid/ReadFromPod";
import { ShowMarkersFulfilledPromise } from "../../../OSMap";
import { filterByType } from "../Filter";
import "../FilterButton.css"

export function FilterLandscape() {
    const [markers, setMarkers] = useState(readFromDataSet());
    return (
      <div>
        <button className="filter-landscape"
          onClick={async () => {
            setMarkers(readFromDataSet());
            ShowMarkersFulfilledPromise(await filterByType(markers, "landscape"));
          }}
        >
        <img src="https://cdn-icons-png.flaticon.com/512/2795/2795602.png" />
        </button>
      </div>
    );
  }