import React, { useEffect } from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { fetchProfile } from "../store/userProfile/actions";
import { selectProfile } from "../store/userProfile/selectors";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  Grid,
  Flex,
  Spinner,
} from "@chakra-ui/core";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);

  const p = useSelector(selectProfile);
  const token = useSelector(selectToken);
  const cardC = {
    flex: "1",
    minW: "300px",
    textAlign: "left",
    color: "white",
    mx: "6",
    mb: "6",
    borderWidth: "1",
    borderRadius: "8",
    boxShadow: "lg",
  };

  return !token ? (
    <>
      <h3>
        " You are required to have an account in order to view this page. Follow{" "}
        <Link to="/signup">this link</Link> to register on Made with Love 💟 "
      </h3>
    </>
  ) : p === null ? (
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
    <Box textAlign="center">
      <Box
        style={{
          backgroundColor: "#fbe2e5",
          color: "black",
        }}
      >
        <Avatar size="xxl" src={p.profile.image} showBorder />
        <Heading mb={4}>
          {p.profile.name} {p.profile.surname}
        </Heading>
        <Text fontSize="xl" color="gray.500">
          <ul key={p.profile.name}>
            <li>
              {p.profile.name} has{" "}
              <strong>
                {p.profile.listings.length === 0
                  ? "no"
                  : p.profile.listings.length}
              </strong>{" "}
              active listings 💖
            </li>
            <li>
              Posting on Made with Love since:{" "}
              {moment(p.profile.createdAt).format("DD-MM-YYYY")}
            </li>
          </ul>
        </Text>
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {p.profile.listings.map((l) => {
          return (
            <Box {...cardC}>
              <Box>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="#eb8f8f"
                >
                  {l.title}
                </Text>
                <Text mt={2} color="gray.500">
                  Posted on: {moment(l.createdAt).format("DD-MM-YYYY")}
                </Text>
                <Text mt={2} color="gray.500">
                  {l.description} <br />
                </Text>
              </Box>
              <Box>
                <Text mt={2} color="gray.500">
                  💵€{l.price}
                  <br />
                  💖{l.likes}
                </Text>

                <Link to={`/feed/${l.id}`}>
                  <Button
                    align="bottom"
                    mt={4}
                    color="#eb8f8f"
                    borderWidth={1}
                    borderColor="#eb8f8f"
                  >
                    {" "}
                    Order{" "}
                  </Button>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
