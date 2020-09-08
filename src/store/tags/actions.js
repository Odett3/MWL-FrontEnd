import axios from "axios";

const tagsFetched = (tags) => {
  return {
    type: "TAGS-FETCHED",
    payload: tags,
  };
};

export async function fetchTags(dispatch, getState) {
  const res = await axios.get("http://localhost:4000/tags");

  const tags = res.data.allTags;
  console.log("fetchTags -> tags", tags);

  dispatch(tagsFetched(tags));
}
