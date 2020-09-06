import React, { useState } from "react";
// import { selectToken } from "../../store/user/selectors";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { createPost } from "../../store/posts/actions";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, content, price);

    // dispatch(createPost(title, content));
    // redirect to the homepage using useHistory & history.push
    // history.push("/");
  }
  return (
    <div>
      <h1>Create a listing </h1>
      <form onSubmit={handleSubmit}>
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
