import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import { addMarker } from "../../api/api";
import CommentsPage from "../CommentsPage/CommentsPage";
import { useState } from "react";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [30, 30],
});

export async function saveMarker(markerData: any) {
  await addMarker(markerData);
}

export function OSMap() {
  const [markerForm,setMarkerForm] = useState(false);

  function addMarker(lat: number, lng: number, comment: string) {
    const newMarker = { lat, lng, comment };
    saveMarker(newMarker); // Llama a la función saveMarker para guardar el nuevo marcador en la base de datos.
  }

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        //const comment = "comentario"; 
        const { lat, lng } = e.latlng;
        let marker = L.marker([lat, lng], {
          icon: markerIcon,
          draggable: false,
        });
        marker.addTo(map);
        marker.bindPopup(marker.getLatLng().toString()).openPopup();

        setMarkerForm(true);
        /*
        let popup = L.popup()
          .setLatLng([lat, lng])
          .setContent(
            "<h3>Comentario:</h3><textarea id=comment></textarea><button name=btnComment>Confirmar</button>"
          )
          .openOn(map);
        */
        //Una vez funcione el formulario anterior esto se puede eliminar
        document.getElementsByName("btnComment").forEach((btn) =>
          btn.addEventListener(
            "click",
            function () {
              addMarker(
                lat,
                lng,
                (document.getElementById("comment") as HTMLTextAreaElement)
                  .value
              );
            },
            false
          )
        );
      },
    });
    return null;
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "700px", borderRadius: "inherit" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
      {markerForm && <CommentsPage/>}
    </MapContainer>
  );
}
