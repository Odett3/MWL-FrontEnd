import axios from "axios";

export function startLoadingPost() {
  return {
    type: "LISTING-LOADING",
  };
}

export function postFullyFetched(data) {
  return {
    type: "INDIVIDUAL-POST-FETCHED",
    payload: data,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const res = await axios.get(`http://localhost:4000/feed/${id}`);

    const onePost = res.data.listing;

    dispatch(postFullyFetched(onePost));
  };
}
