import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Flex,
  Text,
  Divider,
  Avatar,
  Button,
} from "@chakra-ui/core";

export default function ListingCard(props) {
  const cardC = {
    flex: "1",
    minW: "300px",
    textAlign: "center",
    mx: "6",
    mb: "6",
    borderWidth: "1",
    borderRadius: "8",
    boxShadow: "lg",
  };

  return (
    <>
      <Box {...cardC}>
        <Box>
          <Flex justify="space-between">
            <Image
              rounded="md"
              src={props.img}
              alt="foodItem"
              width="100%"
              height="220px"
            />
          </Flex>
          <Flex align="baseline" mt={2}>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="#eb8f8f"
            >
              📍Location: {props.location}
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {props.title}
          </Text>

          <Divider borderColor="#eb8f8f" />

          <Avatar name="user" src={props.icon} />
          <Text mt={2} key={props.id}>
            {" "}
            Posted by: {props.name}
          </Text>

          <Divider borderColor="#eb8f8f" />
        </Box>{" "}
        {props.tags}
        <Box>💖{props.likes}</Box>
        <Link to={`/feed/${props.listingId}`}>
          <Button> See More</Button>
        </Link>
      </Box>
    </>
  );
}
