import React, { useState, useEffect } from "react";
import { selectTags } from "../store/tags/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../store/tags/actions";
import { useHistory } from "react-router-dom";
import { addPost } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import {
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Button,
  Divider,
} from "@chakra-ui/core";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [postTags, setPostTags] = useState([]);
  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [addTag, setNewTag] = useState("");

  const dispatch = useDispatch();
  const tags = useSelector(selectTags);

  useEffect(() => {
    dispatch(fetchTags);
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addPost(title, description, price, image, postTags));

    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setPostTags([]);

    setMessage("Thank you! Post Created!");

    history.push("/mypage");
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
  const token = useSelector(selectToken);
  return (
    token && (
      <>
        <Flex width="full" align="center" justifyContent="center">
          <Box
            p={8}
            maxWidth="800px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Box textAlign="left">
              <Heading>
                <div className="appTitle"> Create a listing: </div>
              </Heading>
              <Divider borderColor="#eb8f8f" />
              <form onSubmit={handleSubmit}>
                <FormLabel>
                  Select a tag/tags that describes your listing:
                </FormLabel>

                <CheckboxGroup isInline spacing={8}>
                  {tags
                    ? tags.map((tag) => {
                        return (
                          <div>
                            <Checkbox
                              id={tag.id}
                              onChange={() => editTags(tag.id)}
                              value={postTags}
                            >
                              {" "}
                              {tag.title}
                            </Checkbox>
                          </div>
                        );
                      })
                    : null}
                </CheckboxGroup>

                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Cranberry Pecan Granola"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  <FormLabel>Tell us how it's made!</FormLabel>
                  <Textarea
                    placeholder="I have been making this since forever. It is a family favourite."
                    size="sm"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    placeholder="5"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                  <br />
                  <FormLabel>
                    {" "}
                    Finally, add your best picture!{" "}
                    <span alt="cupcake">🧁</span>{" "}
                  </FormLabel>
                  <Input
                    type="file"
                    placeholder="Upload an image"
                    onChange={handleUpload}
                  />

                  <br />
                  <Box borderWidth={1} borderRadius={8}>
                    {loadingImage ? (
                      "Uploading your image..."
                    ) : (
                      <img src={image} />
                    )}
                  </Box>
                  <br />
                </FormControl>

                <Button
                  variantColor="#hotpink"
                  variant="outline"
                  width="full"
                  mt={4}
                  type="submit"
                  color="#eb8f8f"
                  borderWidth={1}
                  borderColor="#eb8f8f"
                >
                  {" "}
                  Create Listing!{" "}
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </>
    )
  );
}
