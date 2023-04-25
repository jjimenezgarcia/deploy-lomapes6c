/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { readFromDataSet } from "../../../Solid/ReadFromPod";
import { ShowMarkersFromPromise } from "../../OSMap";
import "./MarkersButton.css";
import "../Filters/FilterButton.css";

export default function Markers() {
  const [markers, setMarkers] = useState(readFromDataSet());

  return (
    <div>
      <button 
        className="button-markers"
        onClick={async () => {
          setMarkers(readFromDataSet());
          ShowMarkersFromPromise(markers);
        }}
      >
        <img className = "filter-button-image" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Fmap-marker-icon.png&f=1&nofb=1&ipt=f6f46ecb3bdc3be332acbfd7055c767c5f48fd2a8c3c4970dd2ec5026971348d&ipo=images" />
      </button>
    </div>
  );
}
