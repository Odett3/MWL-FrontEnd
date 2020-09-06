import React, { useEffect } from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { fetchProfile } from "../store/userProfile/actions";
import { selectProfile } from "../store/userProfile/selectors";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);

  const p = useSelector(selectProfile);
  const token = useSelector(selectToken);

  return !token ? (
    <h3>
      " You are required to have an account in order to view this page. Follow{" "}
      <Link to="/signup">this link</Link> to register on Made with Love 💟 "
    </h3>
  ) : p === null ? (
    <p>"loading"</p>
  ) : (
    <div>
      <h1>Work in progress </h1>

      <img src={p.profile.image} width="40%" alt="user icon" />

      <h4>
        {p.profile.name} {p.profile.surname}
      </h4>

      <p>
        {p.profile.name} has <strong>{p.profile.listings.length} </strong>active
        listings
      </p>

      <p>Posting from {p.profile.address}</p>
      <p>
        Posting on Made with Love since:{" "}
        {moment(p.profile.createdAt).format("DD-MM-YYYY")}
      </p>
    </div>
  );
}
