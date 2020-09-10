import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useDispatch } from "react-redux";
import userSignUp from "../store/user/actions";
import { useHistory } from "react-router-dom";
import { Col, Form, Button } from "react-bootstrap";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [postCode, setPostCode] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      userSignUp(
        name,
        surname,
        email,
        password,
        phoneNumber,
        image,
        parseFloat(coordinates.lat),
        parseFloat(coordinates.lng),
        address,
        postCode
      )
    );
    history.push("/login");
    setEmail("");
    setSurname("");
    setPassword("");
    setName("");
    setPhoneNumber("");
    setImage("");
    setAddress("");
    setCoordinates({
      lat: null,
      lng: null,
    });
    setPostCode("");
  }
  // image upload functions:

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "madewithlove");
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

  //address field function:
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  );

  // return (

  // <>
  //   <h1>Set up a new account!</h1>

  {
    /* <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="First name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Surname"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Control
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Col>
        </Form.Row>
        <Col>
          <Form.Control
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </Col>

        <Form.Group controlId="formGridAddress1">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <p>
                  {" "}
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    className="form-control"
                    {...getInputProps({
                      placeholder: "Stationsplein 11 L,  Haarlem",
                    })}
                  />
                </p>
                <div>
                  {loading ? <div> Loading addresses... </div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                    };

                    return (
                      <div
                        key={suggestion.placeId}
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <p>{address}</p>

          <Form.Label>Post Code</Form.Label>
          <Form.Control
            placeholder="2011 LR"
            value={postCode}
            onChange={(event) => {
              setPostCode(event.target.value);
            }}
          />
        </Form.Group>

        {/* image field: */
  }

  //     <Form.Group>
  //       <Form.File
  //         id="exampleFormControlFile1"
  //         type="file"
  //         name="file"
  //         placeholder="Upload an image"
  //         onChange={handleUpload}
  //       />{" "}
  //       {loadingImage ? "Uploading your image..." : <img src={image} />}
  //     </Form.Group>
  //     <Button variant="primary" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  // </> */}
  // );
}
