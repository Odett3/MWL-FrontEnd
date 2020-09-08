import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPost } from "../store/individualListing/actions";
import { addingHeart } from "../store/individualListing/actions";
import { selectPost } from "../store/individualListing/selectors";
import { Button } from "react-bootstrap";
import { selectLikes } from "../store/individualListing/selectors";

export default function IndividualListing() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const likes = useSelector(selectLikes);

  useEffect(() => {
    dispatch(addingHeart);
  }, [dispatch]);

  const listing = useSelector(selectPost);

  return listing === null ? (
    <p>"loading"</p>
  ) : (
    <div>
      <h1 key={listing.post.id}>{listing.post.title}</h1>
      <p> rest of description..... </p>
      <Button onClick={() => dispatch(addingHeart())}> 💖</Button>{" "}
      {likes ? likes : listing.post.likes}
      <br />
      <Link to={`/user/${listing.post.user.id}`}>
        <button> See more info on the user </button>
      </Link>
    </div>
  );
}
