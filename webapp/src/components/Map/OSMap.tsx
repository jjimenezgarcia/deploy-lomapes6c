import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import { addMarker } from "../../api/api";
import { Console } from "console";
import { click } from "@testing-library/user-event/dist/click";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [30, 30],
});

async function saveMarker(markerData: any) {
  await addMarker(markerData);
}

async function saveComment(){
  
}


export function OSMap(){

    function addMarker(lat: number, lng: number, comment: string) {
      const newMarker = { lat, lng, comment};
      saveMarker(newMarker); // Llama a la función saveMarker para guardar el nuevo marcador en la base de datos. 
    }

  function addComment(){ // mostraria el textarea para comentar y despues guardaria el comentario
    const comment = document.getElementById("comment") as HTMLTextAreaElement;
    console.log("entra");
    console.log("valor:"+comment.value);
    saveComment();
  }

    function MyComponent() {
      const map = useMapEvents({
        click: (e) => {
          const comment = 'comentario' //TODO: implementar que se puedan añadir comentarios desde el front
          const { lat, lng } = e.latlng;
          let marker = L.marker([lat, lng], { icon: markerIcon, draggable:true });
        marker.addTo(map);
          marker.bindPopup(marker.getLatLng().toString()).openPopup();
        let popup = L.popup()
          .setLatLng([lat, lng])
          .setContent("<h3>Comentario:</h3><textarea id=comment></textarea><button name=btnComment>Confirmar</button>").openOn(map);
        
        /* La siguiente linea es una marranada pero no sabia como meter el onclick al tener que pasarselo como parametro
           
        */
        document.getElementsByName("btnComment").forEach(e => e.addEventListener("click",addComment));
        addMarker(lat, lng, comment);     
        }
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
    </MapContainer>
  );
}
