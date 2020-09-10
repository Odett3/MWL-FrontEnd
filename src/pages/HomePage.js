import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Divider, Button } from "@chakra-ui/core";

import MapComponent from "../components/Map";

export default function HomePage() {
  return (
    <div>
      <Box textAlign="center">
        <Box>
          <Heading mb={4} color="#eb8f8f">
            {" "}
            Hey, nice to see you! Welcome to Made with Love 💖
          </Heading>
          <Text fontSize="xl">
            Made with Love is a classifieds website where you can share your
            home made goods with our users! And if you're not such a good cook
            then you could browse what other users have to offer! We are so
            proud of the amount of talent we host here at MWL💖 and we look
            forward to you joining the fun! Cook more and make our users happy
            or eat more and support a neighbour!
            <Divider borderColor="#eb8f8f" />
            Make sure to check out the map 🗺 below to check if there is any of
            our users posting in your area! If not, please be the first to join
            our ever growing community, we will be very happy to have you!
          </Text>

          <Link to="/feed">
            <Button color="#eb8f8f">Check out all our listings</Button>
          </Link>
        </Box>
      </Box>

      <MapComponent />
    </div>
  );
}
