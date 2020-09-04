import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, surname, email, password, phoneNumber, image);

    setEmail("");
    setSurname("");
    setPassword("");
    setName("");
    setPhoneNumber("");
    setImage("");
  }

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

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result);
  //   };
  // };

  return (
    <div>
      <h1>Set up a new account!</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </p>
        <p>
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            placeholder="surname"
            value={surname}
            onChange={(event) => {
              setSurname(event.target.value);
            }}
          />
        </p>

        <p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </p>
        <p>
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="phone number"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </p>

        <p>
          <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={handleUpload}
          />{" "}
          {loadingImage ? "Uploading your image..." : <img src={image} />}
        </p>

        <input type="submit" />
      </form>
    </div>
  );
}
