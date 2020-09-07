import axios from "axios";
import { selectToken } from "../user/selectors";

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

export function postCreated(data) {
  return {
    type: "POST_CREATED",
    payload: data,
  };
}

export async function fetchPosts(dispatch, getState) {
  dispatch(startLoading());

  const res = await axios.get(API_URL);

  const morePosts = res.data.allListings;

  dispatch(postsFetched(morePosts));
}

export function addPost(title, description, price, imageUrl, tags) {
  return async function (dispatch, getState) {
    const token = selectToken(getState());
    console.log("addPost -> token", token);

    if (token === null) return;
    try {
      const response = await axios.post(
        "http://localhost:4000/create",
        {
          title,
          description,
          price,
          imageUrl,
          tags,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(postCreated(response));
    } catch (error) {
      console.log(error);
    }
  };
}
