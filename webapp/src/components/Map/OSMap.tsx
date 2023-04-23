import "./OSMap.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import CommentsPage from "../CommentsPage/CommentsPage";
import { useState } from "react";
import FilterHamburger from "./Markers/Filters/Hamburger/FilterHamburger";
var map: L.Map;

export interface Marker {
  lat: number;
  lng: number;
  comment: string;
  title: string;
  type: string;
  score: number;
}

export function ShowMarkersFromPromise(promise: any) {
  promise.then((array: any) => {
    ShowMarkersFulfilledPromise(array);
  });
}

export function ShowMarkersFulfilledPromise(array: any[] | null) {
  if (array === null) return;
  array.forEach((element: any) => {
    let marker = L.marker([element.lat, element.lng], {
      icon: markerIcon,
      draggable: false,
    });
    marker.addTo(map);
    marker.bindPopup(element.tile).openPopup();
  });
}

export function clearMarkers() {
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      console.log(layer);
      map.removeLayer(layer);
    }
  });
}

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [30, 30],
});

export function OSMap() {
  const [markerForm, setMarkerForm] = useState(false);
  const [cords, setCords] = useState<number[]>([0, 0]);

  function cancelMarker() {
    setMarkerForm(false);
  }

  function MyComponent() {
    map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setCords([lat, lng]);

        setMarkerForm(true);
      },
    });
    return null;
  }

  function submit() {
    let marker = L.marker([cords[0], cords[1]], {
      icon: markerIcon,
      draggable: false,
    });

    marker.addTo(map);
    marker.bindPopup(marker.getLatLng().toString()).openPopup();

    setMarkerForm(false);
  }

  return (
    <div>
      <div className="map">
        <div className="filters">
         <FilterHamburger />
        </div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "700px", borderRadius: "inherit" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!markerForm && <MyComponent />}
        </MapContainer>
        {markerForm && (
          <div className="comment">
            <CommentsPage
              key={markerForm}
              lat={cords}
              onSubmit={submit}
              onChange={cancelMarker}
            />
          </div>
        )}
      </div>
    </div>
  );
}
