import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function ListingCard(props) {
  return (
    <>
      <Card.Img variant="top" src={props.img} />
      <Card.Title>{props.title}</Card.Title>

      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <h6>Location: {props.location} </h6>
        <p>{props.tags}</p>
        <p> 💖{props.likes}</p>
        <p>
          {" "}
          <img
            variant="top"
            src={props.icon}
            style={{ borderRadius: "50%", width: "60px" }}
          />
          Posted by: {props.name}{" "}
        </p>
      </Card.Body>
      <large className="text-muted">
        <Link to={`/feed/${props.listingId}`}>See More</Link>
      </large>
    </>
  );
}
