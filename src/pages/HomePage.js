import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h3>Welcome</h3>

      <Link to="/feed"> Check out our super cool listings </Link>
    </div>
  );
}
