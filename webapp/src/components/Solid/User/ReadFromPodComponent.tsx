import { useState } from "react";
import { readFromDataSet } from "../ReadFromPod";

export default function ReadFromPodComponent() {
  const [markers, setMarkers] = useState([] as any);

  console.log(markers);

  if (markers.length > 0) {
    markers.map((marker: any) => {
      console.log(marker);
    });
  }

  return (
    <div>
      <button onClick={() => setMarkers(readFromDataSet())}>
        Read from Pod
      </button>
      <div>
        {markers.length > 0 &&
          markers.map((marker: any) => <div>{marker}</div>)}
      </div>
    </div>
  );
}
