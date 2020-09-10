import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { fetchTags } from "../store/tags/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { selectTags } from "../store/tags/selectors";
import {
  Box,
  Button,
  Grid,
  Tag,
  TagLabel,
  Heading,
  Select,
  Divider,
  Flex,
  Spinner,
} from "@chakra-ui/core";

export default function Feed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);
  const tags = useSelector(selectTags);
  const [selectedTag, setSelectedTag] = useState("");
  const [sortedPost, setSortedPost] = useState("");

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTags);
  }, [dispatch]);

  function compareLikes(postA, postB) {
    return postB.likes - postA.likes;
  }
  function compareDatePosted(postA, postB) {
    return postB.id - postA.id;
  }

  let filteredListings;

  if (selectedTag) {
    filteredListings = posts.filter((p) =>
      p.tags.some((t) => {
        return t.title === selectedTag.title;
      })
    );
  } else if (sortedPost === "mostLikes") {
    filteredListings = [...posts].sort(compareLikes);
  } else if (sortedPost === "datePosted") {
    filteredListings = [...posts].sort(compareDatePosted);
  } else {
    filteredListings = [...posts];
  }

  return (
    posts && (
      <Box>
        {" "}
        <Heading>
          <div className="appTitle">What's on offer?</div>
        </Heading>
        <Box>
          <Divider borderColor="#eb8f8f" />
          <Select
            onChange={(event) => setSortedPost(event.target.value)}
            variant="outline"
            placeholder="Sort By.."
          >
            <option value="mostLikes">Sort By Most Liked</option>
            <option value="datePosted">Sort By Last Posted</option>
          </Select>
          <Divider borderColor="#eb8f8f" />
        </Box>
        <Flex w="100%" flexWrap="wrap" justify="space-between">
          <Box>
            <Button
              variant="secondary"
              size="lg"
              color="#eb8f8f"
              borderWidth={1}
              borderColor="#eb8f8f"
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
                      color="#eb8f8f"
                      borderWidth={1}
                      borderColor="#eb8f8f"
                    >
                      {tag.title}
                    </Button>
                  );
                })
              : null}{" "}
          </Box>
        </Flex>
        <Divider />
        <Divider />
        <Grid templateColumns="repeat(4, 4fr)" gap={3}>
          {filteredListings &&
            filteredListings.map((list) => {
              return (
                <ListingCard
                  key={list.id}
                  title={list.title}
                  name={list.user.name}
                  icon={list.user.image}
                  location={list.user.address}
                  img={list.listingImages.map((i) => {
                    return i.imageUrl;
                  })}
                  likes={list.likes}
                  tags={list.tags.map((t) => {
                    return (
                      <>
                        <Tag>
                          <TagLabel key={t.id}>#{t.title}</TagLabel>
                        </Tag>{" "}
                      </>
                    );
                  })}
                  listingId={list.id}
                />
              );
            })}
        </Grid>
      </Box>
    )
  );
}
