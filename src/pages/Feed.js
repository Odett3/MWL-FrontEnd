import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

export default function Feed() {
  const [listings, setListings] = useState([]);

  const url = "http://localhost:4000/feed";

  async function getResults() {
    try {
      const results = await axios.get(url);
      console.log(results.data.allListings);

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
          <>
            <h1 key={list.id}>{list.title}</h1>

            <h3>
              Posted by: {list.user.name} {list.user.surname}
            </h3>

            <h6>Location: {list.user.address}</h6>
            {list.listingImages.map((i) => {
              return <img width="40%" src={i.imageUrl} alt="foodItem" />;
            })}

            <p>
              {list.tags.map((t) => {
                return <p key={t.listingTags.tagId}> {t.title}</p>;
              })}
            </p>
          </>
        );
      })}
    </div>
  );
}
