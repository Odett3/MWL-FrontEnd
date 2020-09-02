import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

export default function Feed() {
  const [listings, setListings] = useState([]);

  const url = "http://localhost:4000/feed";

  async function getResults() {
    try {
      const results = await axios.get(url);

      setListings(results.data.allListings);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h2>What's on offer?</h2>

      {listings.map((list) => {
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
