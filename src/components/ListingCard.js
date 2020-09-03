import React from "react";
import { Link } from "react-router-dom";

export default function ListingCard(props) {
  return (
    <div className="card border-dark mb-3">
      <div className="media">
        <img
          className="align-self-start mr-3"
          width="20%"
          src={props.icon}
          alt="userIcon"
        />
      </div>
      <div className="media-body">
        <h1 className="mt-0">{props.title}</h1>

        <h3>
          Posted by: {props.name} {props.surname}
        </h3>
        <h6>Location: {props.location} </h6>

        <img width="40%" src={props.img} alt="foodItem" />
        <p>{props.tags}</p>

        <Link to={`/feed/${props.listingId}`}>See More</Link>
      </div>
    </div>
  );
}
