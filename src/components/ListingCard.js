import React from "react";
import { Link } from "react-router-dom";

export default function ListingCard(props) {
  return (
    <div>
      <Link to={`/feed/${props.id}`}>
        <h3>{props.title}</h3>
      </Link>
      <p>{props.body}</p>
    </div>
  );
}
