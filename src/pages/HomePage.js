import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";

export default function HomePage() {
  return (
    <div>
      <h3>Welcome</h3>
      <Map />

      <Link to="/feed"> Check out our super cool listings </Link>
    </div>
  );
}
