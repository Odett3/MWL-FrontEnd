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

  console.log("this is listing", listing);

  return listing === null ? (
    <p>"loading"</p>
  ) : (
    <div>
      <h1 key={listing.post.id}>{listing.post.title}</h1>
      {listing.post.listingImages.map((i) => {
        return <img src={i.imageUrl} />;
      })}
      <h5>
        {" "}
        📞 Call {listing.post.user.name} on {listing.post.user.phone} to make an
        order{" "}
      </h5>
      <h5>
        👩🏻‍🍳<em> Words from the creator: </em>
      </h5>
      <p>{listing.post.description} </p>
      <Button onClick={() => dispatch(addingHeart())}> 💖</Button>{" "}
      {likes ? likes : listing.post.likes}
      <br />
      <Link to={`/user/${listing.post.user.id}`}>
        <button> See more info on the user </button>
      </Link>
    </div>
  );
}
