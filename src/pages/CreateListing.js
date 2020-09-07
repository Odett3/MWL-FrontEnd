import React, { useState, useEffect } from "react";
import { selectTags } from "../store/tags/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../store/tags/actions";
// import { Link, useHistory } from "react-router-dom";
// import { createPost } from "../../store/posts/actions";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [postTags, setPostTags] = useState([]);
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  console.log("CreateListing -> tags", tags);

  useEffect(() => {
    dispatch(fetchTags);
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, content, price);
    postTags.map((t) => {
      console.log(t);
    });

    // dispatch(createPost(title, content));
    // redirect to the homepage using useHistory & history.push
    // history.push("/");
  }

  useEffect(() => {
    dispatch(fetchTags);
  }, [dispatch]);

  function editTags(tagId) {
    if (postTags.includes(tagId)) {
      const newTags = postTags.filter((id) => {
        return !(id === tagId);
      });
      setPostTags(newTags);
    } else {
      const newTags = [...postTags, tagId];
      setPostTags(newTags);
    }
  }

  return (
    <div>
      <h1>Create a listing </h1>
      <form onSubmit={handleSubmit}>
        <h3>Select a tag that describes your listing: </h3>
        {tags
          ? tags.map((tag) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    id={tag.id}
                    value={postTags}
                    onChange={() => editTags(tag.id)}
                  />
                  {tag.title}
                </div>
              );
            })
          : null}
        <p>
          <label>Title of your item: </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <p>
          <label>Description; Tell us how it's made!</label>
          <textarea
            name="content"
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </p>
        <p>
          <label>Price: </label>
          <input
            name="price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}
