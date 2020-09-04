import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../style/map.css";

export default function MapComponent() {
  return (
    <div>
      <Map center={[52.37949, 4.63772]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
      <h3>hello</h3>
    </div>
  );
}
