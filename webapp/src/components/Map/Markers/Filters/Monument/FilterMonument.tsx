/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { readFromDataSetUrl} from "../../../../Solid/ReadFromPod";
import { clearMarkers, ShowMarkersFromPromise } from "../../../OSMap";
import { filterByType } from "../Filter";
import "../FilterButton.css"
import { getSessionWebID } from "../../../../Solid/Session";

export function FilterMonument() {
    const [markers, setMarkers] = useState(readFromDataSetUrl(getSessionWebID().webId));
    return (
      <div>
        <button className="filter-button"
          onClick={async () => {
            clearMarkers();
            setMarkers(readFromDataSetUrl(getSessionWebID().webId));
            ShowMarkersFromPromise(filterByType(markers, "monument"));
          }}
        >
        <img className = "filter-button-image" src="https://cdn-icons-png.flaticon.com/512/1321/1321018.png" />
        </button>
      </div>
    );
  }