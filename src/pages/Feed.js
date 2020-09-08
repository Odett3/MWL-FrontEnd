import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { fetchTags } from "../store/tags/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { selectTags } from "../store/tags/selectors";
import { Button } from "react-bootstrap";

export default function Feed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);
  const tags = useSelector(selectTags);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTags);
  }, [dispatch]);

  const filteredListings = selectedTag
    ? posts.filter((p) =>
        p.tags.some((t) => {
          return t.title === selectedTag.title;
        })
      )
    : posts;

  return (
    <div className="container home">
      <h2>What's on offer?</h2>

      <h4>
        Filter by Tag:
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setSelectedTag(null)}
        >
          All Listings{" "}
        </Button>
        {tags
          ? tags.map((tag) => {
              return (
                <Button
                  onClick={() => setSelectedTag(tag)}
                  key={tag.id}
                  variant="secondary"
                  size="lg"
                >
                  {tag.title}
                </Button>
              );
            })
          : null}
      </h4>
      {loading ? "Posts loading..." : null}
      {filteredListings.map((list) => {
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
              return (
                <>
                  <Button
                    className="btn-flat"
                    size="sm"
                    variant="secondary"
                    disabled
                  >
                    {t.title} 🏷
                  </Button>
                </>
              );
            })}
            listingId={list.id}
          />
        );
      })}
    </div>
  );
}
