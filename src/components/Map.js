import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../style/map.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFeedPosts } from "../store/feed/selectors";
export default function MapComponent() {
  // const listings = useSelector(selectFeedPosts);

  return (
    <div>
      <Map center={[52.37949, 4.63772]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[52.37949, 4.63772]}>
          <Popup>
            User with 5 listings
            <Link to="/user/2">CHECK ME OUT</Link>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}
