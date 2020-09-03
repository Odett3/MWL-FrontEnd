import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPost } from "../store/individualListing/actions";
import { selectPost } from "../store/individualListing/selectors";

export default function IndividualListing() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const listing = useSelector(selectPost);

  return listing === null ? (
    <p>"loading"</p>
  ) : (
    <div>
      <h1>{listing.post.title}</h1>

      <p> rest of description..... </p>
      <Link to={`/user/${listing.post.user.id}`}>
        <button> See more info on the user </button>
      </Link>
    </div>
  );
}
