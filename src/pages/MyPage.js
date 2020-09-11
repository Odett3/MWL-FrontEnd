import React, { useEffect } from "react";
import { selectUser, selectUserListings } from "../store/user/selectors";
import { fetchUserInfo } from "../store/user/actions";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken } from "../store/user/selectors";
import moment from "moment";
import { Box, Avatar, Heading, Text, Button, Grid } from "@chakra-ui/core";

export default function MyPage() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const listings = useSelector(selectUserListings);
  console.log(listings);

  useEffect(() => {
    dispatch(fetchUserInfo);
  }, [dispatch]);

  const cardC = {
    flex: "1",
    minW: "300px",
    textAlign: "left",
    color: "white",
    mx: "6",
    mb: "6",
    borderWidth: "1px",
    borderRadius: "8px",
    boxShadow: "lg",
    padding: "10px",
  };
  return (
    user &&
    token && (
      <div>
        <Box textAlign="center">
          <Box
            style={{
              backgroundColor: "#fbe2e5",
              color: "black",
            }}
          >
            {" "}
            <Avatar size="xl" src={user.image} showBorder />
            <Heading mb={4}>
              {" "}
              <div className="appTitle">Dashboard</div>
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Welcome Back {user.name}! You have{" "}
              {listings.length === 0 ? "no" : listings.length} listings 💖
            </Text>
          </Box>
        </Box>

        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {listings
            ? listings.map((l) => {
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
                    </Box>
                  </Box>
                );
              })
            : null}
        </Grid>
        <Link to="/create">
          <Button variant="outline" width="full" mt={4} type="submit">
            Make a new listing!
          </Button>
        </Link>
      </div>
    )
  );
}
