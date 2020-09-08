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

export function updateLikes(data) {
  return { type: "ADD_HEART", payload: data };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const res = await axios.get(`http://localhost:4000/feed/${id}`);

    const onePost = res.data.listing;

    dispatch(postFullyFetched(onePost));
  };
}

export function addingHeart() {
  return async (dispatch, getState) => {
    const listing = getState().listing.post;
    console.log("addingHeart -> listing ", listing);

    const response = await axios.patch(
      `http://localhost:4000/feed/${listing.id}`
    );
    console.log("addingHeart -> response", response.data.listingAddLike.id);

    dispatch(updateLikes(response.data.listingAddLike.id));
  };
}
