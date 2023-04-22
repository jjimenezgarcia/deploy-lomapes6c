/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { readFromDataSet } from "../../../Solid/ReadFromPod";
import { ShowMarkersFromPromise } from "../../OSMap";
import "./MarkersButton.css";

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
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2017%2F05%2FMap-Marker-PNG-Pic.png&f=1&nofb=1&ipt=c1b65b28a8ec8528e16650e95f3cb901bc309a24d37565ddbc620a7cce8be12e&ipo=images" />
      </button>
    </div>
  );
}
