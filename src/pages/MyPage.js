import React, { useEffect } from "react";
import { selectUser, selectUserListings } from "../store/user/selectors";
import { fetchUserInfo } from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";

export default function MyPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const listings = useSelector(selectUserListings);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  console.log("WHAT HAVE WE GOT HERE", listings);

  return user === undefined ? (
    "loading data"
  ) : (
    <div>
      <h2>
        Welcome back {user.name} {user.surname}!
      </h2>

      <p>
        You have: {listings.length === 0 ? "no" : listings.length} listings!{" "}
      </p>
      {listings === undefined
        ? " "
        : listings.map((l) => {
            return <p>{l.title}</p>;
          })}

      <button>Make a new listing!</button>
    </div>
  );
}
