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

export function usersFetched(data) {
  return {
    type: "ALL-PROFILES-FETCHED",
    payload: data,
  };
}

export function fetchProfile(id) {
  return async function thunk(dispatch, getState) {
    const res = await axios.get(`http://localhost:4000/user/${id}`);

    const oneProfile = res.data.user;

    dispatch(profileFullyFetched(oneProfile));
  };
}

export function fetchAllUsers() {
  return async function thunk(dispatch, getState) {
    const res = await axios.get("http://localhost:4000/users");

    const users = res.data.allUsers;

    dispatch(usersFetched(users));
  };
}
