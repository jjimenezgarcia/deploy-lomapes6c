/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { readFromDataSet } from "../../../../Solid/ReadFromPod";
import { clearMarkers, ShowMarkersFulfilledPromise } from "../../../OSMap";
import { filterByType } from "../Filter";
import "../FilterButton.css"

export function FilterMonument() {
    const [markers, setMarkers] = useState(readFromDataSet());
    return (
      <div>
        <button className="filter-monument"
          onClick={async () => {
            clearMarkers();
            setMarkers(readFromDataSet());
            ShowMarkersFulfilledPromise(await filterByType(markers, "monument"));
          }}
        >
        <img src="https://cdn-icons-png.flaticon.com/512/1321/1321018.png" />
        </button>
      </div>
    );
  }