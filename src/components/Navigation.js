import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        Home
      </NavLink>{" "}
      <NavLink
        exact
        to="/feed"
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        Listings
      </NavLink>
    </>
  );
}
