import React from "react";
import { Link } from "react-router-dom";

import MapComponent from "../components/Map";

export default function HomePage() {
  return (
    <div>
      <h3>Welcome to Made with Love </h3>
      <MapComponent />

      <Link to="/feed"> Check out our super cool listings </Link>
    </div>
  );
}
