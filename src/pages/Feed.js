import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

export default function Feed() {
  const [listings, setListings] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  async function getResults() {
    try {
      const results = await axios.get(url);

      setListings(results.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h2>Our Cool Listings</h2>

      {listings.map((list) => {
        return (
          <ListingCard
            id={list.id}
            key={list.id}
            title={list.title}
            body={list.body}
          />
        );
      })}
    </div>
  );
}
