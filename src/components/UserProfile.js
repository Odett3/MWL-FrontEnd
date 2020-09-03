import React, { useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProfile } from "../store/userProfile/actions";
import { selectProfile } from "../store/userProfile/selectors";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);

  const p = useSelector(selectProfile);

  return p === null ? (
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
