import React from 'react';
import {TileLayer, MapContainer} from 'react-leaflet';

export const BasicMap = () => {
    return (
        <>
            <h1>Test openstreet maps</h1>
            MapContainer
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    );
    };