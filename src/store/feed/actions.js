import axios from "axios";

const API_URL = `http://localhost:4000/feed`;

export function startLoading() {
  return {
    type: "FEED-START-LOADING",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "FEED-POSTS-FETCHED",
    payload: morePosts,
  };
}

export async function fetchPosts(dispatch, getState) {
  dispatch(startLoading());

  const res = await axios.get(API_URL);

  const morePosts = res.data.allListings;

  dispatch(postsFetched(morePosts));
}
