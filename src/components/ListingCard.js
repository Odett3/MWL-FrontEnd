import React from "react";
import { Link } from "react-router-dom";
import { Media } from "react-bootstrap";

export default function ListingCard(props) {
  return (
    <Media border="primary" style={{ width: "18rem" }}>
      <img
        className="img-rounded"
        width="20%"
        src={props.icon}
        alt="userIcon"
      />
      <Media.Body>
        <h1 className="mt-0">{props.title}</h1>
        <h3>
          Posted by: {props.name} {props.surname}
        </h3>
        <h6>Location: {props.location} </h6>
        <img width="40%" src={props.img} alt="foodItem" />
        <p>{props.tags}</p>

        <Link to={`/feed/${props.listingId}`}>See More</Link>
      </Media.Body>
    </Media>
  );
}
