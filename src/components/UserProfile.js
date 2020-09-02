import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useState([]);

  const params = useParams();

  const userId = params.id;

  const url = `http://localhost:4000/user/${userId}`;

  async function getResults() {
    try {
      const results = await axios.get(url);

      setUser(results.data.user);
      console.log(results.data.user);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getResults();
  }, []);

  return user.length === 0 ? (
    <p>Content Loading </p>
  ) : (
    <div>
      <h1>Work in progress </h1>

      <img src={user.image} width="40%" alt="user icon" />

      <p>
        {user.name} {user.surname}
      </p>

      <p>
        {user.name} has <strong>{user.listings.length} </strong>active listings{" "}
      </p>

      <p>Posting on Made with Love since: {user.createdAt}</p>
    </div>
  );
}
