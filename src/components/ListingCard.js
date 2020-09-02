import React from "react";
import { Link } from "react-router-dom";

export default function ListingCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>

      <h3>
        Posted by: {props.name} {props.surname}
      </h3>

      <img width="20%" src={props.icon} alt="userIcon" />
      <h6>Location: {props.location} </h6>

      <img width="40%" src={props.img} alt="foodItem" />
      <p>{props.tags}</p>

      <Link to={`/feed/${props.listingId}`}>
        <button> See More </button>
      </Link>
    </div>
  );
}
