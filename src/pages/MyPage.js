import React, { useEffect } from "react";
import { selectUser, selectUserListings } from "../store/user/selectors";
import { fetchUserInfo } from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Alert, AlertIcon, AlertDescription } from "@chakra-ui/core";

export default function MyPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const listings = useSelector(selectUserListings);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return user === undefined ? (
    "loading data"
  ) : (
    <div>
      <Box textAlign="center">
        <Alert
          style={{
            backgroundColor: "#fbe2e5",
            color: "black",
          }}
        >
          <AlertDescription>Welcome Back {user.name}! 💖</AlertDescription>
        </Alert>
      </Box>

      <h4>Dashboard:</h4>
      <p>
        You have: {listings.length === 0 ? "no" : listings.length} listings!{" "}
      </p>
      {listings === undefined
        ? " "
        : listings.map((l) => {
            return <p key={l.id}>{l.title}</p>;
          })}

      <Link to="/create">
        <button>Make a new listing!</button>
      </Link>
    </div>
  );
}
