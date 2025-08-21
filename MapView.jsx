import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { emergencyContacts } from "../data/emergencyContacts";

export default function MapView() {
  return (
    <div className="h-64 w-full rounded-xl overflow-hidden shadow">
      <MapContainer center={[-19.8157, -43.9542]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {emergencyContacts.map((contact, idx) => (
          <Marker key={idx} position={contact.location}>
            <Popup>
              <strong>{contact.name}</strong>
              <br />
              {contact.phone}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
