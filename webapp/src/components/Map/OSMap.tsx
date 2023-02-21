import { MapContainer, TileLayer} from 'react-leaflet';

export function OSMap(){
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    );
  }
  