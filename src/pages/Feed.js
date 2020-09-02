import React, { useEffect } from "react";
import ListingCard from "../components/ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

export default function Feed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>What's on offer?</h2>
      {loading ? "Posts loading..." : null}
      {posts.map((list) => {
        return (
          <ListingCard
            key={list.id}
            title={list.title}
            name={list.user.name}
            surname={list.user.surname}
            icon={list.user.image}
            location={list.user.address}
            img={list.listingImages.map((i) => {
              return i.imageUrl;
            })}
            tags={list.tags.map((t) => {
              return t.title;
            })}
            listingId={list.id}
          />
        );
      })}
    </div>
  );
}
