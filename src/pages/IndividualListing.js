import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function IndividualListing(props) {
  const [listing, setListing] = useState([]);

  const params = useParams();

  const listingId = params.id;

  const url = `http://localhost:4000/feed/${listingId}`;

  async function getResults() {
    try {
      const results = await axios.get(url);

      setListing(results.data.listing);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getResults();
  }, []);

  return listing.length === 0 ? (
    <p> data is loading</p>
  ) : (
    <div>
      <h1>{listing.title}</h1>

      <p> rest of description..... </p>
      <Link to={`/user/${listing.user.id}`}>
        <button> See more info on the user </button>
      </Link>
    </div>
  );
}
