import { useState } from "react";
import { readFromDataSet } from "../../Solid/ReadFromPod";
import { ShowMarkers } from "../OSMap";

export default function ShowMyMarkers() {
  const [markers, setMarkers] = useState(readFromDataSet());

  return (
    <div>
      <button
        onClick={async () => {
          setMarkers(readFromDataSet());
          ShowMarkers(markers);
        }}
      >
        Mostrar mis marcadores
      </button>
    </div>
  );
}
