import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPost } from "../store/individualListing/actions";
import { addingHeart } from "../store/individualListing/actions";
import { selectPost } from "../store/individualListing/selectors";

import { selectLikes } from "../store/individualListing/selectors";
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Divider,
  Flex,
  Tag,
  Spinner,
} from "@chakra-ui/core";

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
    <Flex width="full" align="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="pink.200"
        color="pink"
        size="xl"
      />
    </Flex>
  ) : (
    <div>
      <Flex width="full" align="center" justifyContent="center">
        <Box
          align="center"
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading key={listing.post.id}>{listing.post.title}</Heading>
          {listing.post.listingImages.map((i) => {
            return <Image rounded="md" src={i.imageUrl} width="100%" />;
          })}
          <Tag variantColor="pink"> Made to order</Tag>
          <Tag variantColor="pink" ml={1} fontsize="l">
            €{listing.post.price}/serving
          </Tag>
          <Divider borderColor="#eb8f8f" />
          <Box>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              📞 Call {listing.post.user.name} on {listing.post.user.phone} to
              make an order{" "}
            </Text>
          </Box>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            👩🏻‍🍳
            {listing.post.description}
          </Text>
          <Text> Collection from: {listing.post.user.address}</Text>
          <br />
          <Box color="orange.400" />
          <Text ml={1} fontsize="sm">
            <b>
              <Button
                color="#eb8f8f"
                borderWidth={1}
                borderColor="#eb8f8f"
                onClick={() => dispatch(addingHeart())}
              >
                {" "}
                Spread some 💖
              </Button>
            </b>{" "}
            ({likes ? likes : listing.post.likes})
          </Text>{" "}
          <Divider borderColor="#eb8f8f" />
          <Link to={`/user/${listing.post.user.id}`}>
            <Button color="#eb8f8f" borderWidth={1} borderColor="#eb8f8f">
              {" "}
              Check out the rest of the user profile!{" "}
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  );
}
