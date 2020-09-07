import React, { useState, useEffect } from "react";
import { selectTags } from "../store/tags/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../store/tags/actions";
// import { Link, useHistory } from "react-router-dom";
import { addPost } from "../store/feed/actions";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [postTags, setPostTags] = useState([]);
  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState("");
  // const [addTag, setNewTag] = useState("");

  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  console.log("CreateListing -> tags", tags);

  useEffect(() => {
    dispatch(fetchTags);
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addPost(title, description, price, image, postTags));

    // dispatch(createPost(title, content));
    // redirect to the homepage using useHistory & history.push
    // history.push("/");
  }
  //tags functions:

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

  //upload image functions

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "MWLlistings");
    setLoadingImage(true);
    const res = await fetch(
      "http://api.cloudinary.com/v1_1/dztzswpcp/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const fileUpload = await res.json();

    setImage(fileUpload.url);
    setLoadingImage(false);
  };

  function handleUpload(e) {
    e.preventDefault();
    uploadImage(e);
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
          {/* <h6>
            Not what you're looking for? Add your own <strong>tag</strong>:{" "}
          </h6>
          <p>
            <label>Tag name: </label>
            <input
              name="tag"
              type="text"
              placeholder=" ex. 'mexican' "
              value={addTag}
              onChange={(event) => {
                setNewTag(event.target.value);
              }}
            />
          </p> */}
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
            name="description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
        <h3> And finally add a picture!</h3>
        <p>
          <input
            className="form-control"
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={handleUpload}
          />{" "}
        </p>

        {loadingImage ? "Uploading your image..." : <img src={image} />}
        <input type="submit" />
      </form>
    </div>
  );
}
