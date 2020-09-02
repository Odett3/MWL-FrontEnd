import axios from "axios";

export function startLoadingPost() {
  return {
    type: "LISTING-LOADING",
  };
}

export function profileFullyFetched(data) {
  return {
    type: "INDIVIDUAL-PROFILE-FETCHED",
    payload: data,
  };
}

export function fetchProfile(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const res = await axios.get(`http://localhost:4000/user/${id}`);
    console.log("thunk -> res", res);

    const oneProfile = res.data.user;
    console.log("thunk ->  oneProfile", oneProfile);
    // console.log("thunk -> res", onePost);

    dispatch(profileFullyFetched(oneProfile));
  };
}
