import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import MapComponent from "../components/Map";

export default function HomePage() {
  return (
    <div>
      <Alert
        style={{
          backgroundColor: "#ffe8df",
          color: "#888888",
          fontStyle: "oblique",
        }}
        variant="success"
      >
        <Alert.Heading>
          Hey, nice to see you! Welcome to Made with Love 💖{" "}
        </Alert.Heading>
        <p>
          Made with Love is a classifieds website where you can share your home
          made goods with our users! And if you're not such a good cook then you
          could browse what other users have to offer! We are so proud of the
          amount of talent we host here at MWL💖 and we look forward to you
          joining the fun! Cook more and make our users happy or eat more and
          support a neighbour!
        </p>
        <hr />
        <p className="mb-0">
          Be sure to checkout the map below to see if there is any users posting
          around you, and if not we would love to have extend our growing
          community!
        </p>
      </Alert>
      <h2>
        <Link to="/feed"> Check out all our listings </Link>
      </h2>
      <MapComponent />
    </div>
  );
}
