import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logOut, fetchUserInfo } from "../store/user/actions";
import { selectToken, selectUser } from "../store/user/selectors";
import { Navbar } from "react-bootstrap";
import "../style/nav.css";

export default function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const isLoggedIn = token ? (
    <>
      <NavLink
        exact
        to="/mypage"
        activeStyle={{
          fontWeight: "bold",
          color: "pink",
        }}
      >
        My Page
      </NavLink>{" "}
      <em>Logged in as {user.name}</em>
      <Link to="/">
        <button onClick={() => dispatch(logOut())}>Logout</button>
      </Link>
    </>
  ) : (
    <>
      <NavLink
        exact
        to="/login"
        activeStyle={{
          fontWeight: "bold",
          color: "pink",
        }}
      >
        Login
      </NavLink>{" "}
      <NavLink
        exact
        to="/signup"
        activeStyle={{
          fontWeight: "bold",
          color: "#dfd3c3",
        }}
      >
        Sign Up
      </NavLink>
    </>
  );

  return (
    <>
      <Navbar bg="dark" variant="#c7b198">
        <Navbar.Brand>
          <img
            alt=""
            src="https://res.cloudinary.com/dztzswpcp/image/upload/v1599502988/mwl_bleqzc.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span
            style={{
              fontStyle: "oblique",
              fontSize: "25px",
              position: "relative",
            }}
          >
            Made with Love
          </span>{" "}
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "pink",
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            exact
            to="/feed"
            activeStyle={{
              fontWeight: "bold",
              color: "pink",
            }}
          >
            Listings
          </NavLink>{" "}
          {isLoggedIn}
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
