import "./OSMap.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import CommentsPage from "../CommentsPage/CommentsPage";
import { useState } from "react";

export interface Marker {
  lat: number;
  lng: number;
  comment: string;
  title: string;
  type: string;
  score: number;
}

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [30, 30],
});

export function OSMap() {
  const [markerForm, setMarkerForm] = useState(false);
  const [cords, setCords] = useState<number[]>([0, 0]);

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setCords([lat, lng]);
        let marker = L.marker([lat, lng], {
          icon: markerIcon,
          draggable: false,
        });
        marker.addTo(map);
        marker.bindPopup(marker.getLatLng().toString()).openPopup();

        setMarkerForm(true);
      },
    });
    return null;
  }

  return (
 
      <div className="map">
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
          <CommentsPage lat={cords} />
        </div>
      )}
    </div>
  );
}
