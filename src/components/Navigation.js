import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logOut, fetchUserInfo } from "../store/user/actions";
import { selectToken, selectUser } from "../store/user/selectors";

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
          color: "black",
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
          color: "black",
        }}
      >
        Login
      </NavLink>{" "}
      <NavLink
        exact
        to="/signup"
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        Sign Up
      </NavLink>
    </>
  );

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
      </NavLink>{" "}
      {isLoggedIn}
    </>
  );
}
