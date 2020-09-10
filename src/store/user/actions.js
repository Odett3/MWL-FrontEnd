import axios from "axios";
import { selectToken } from "./selectors";

const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

export function postCreated() {
  return {
    type: "POST_CREATED",
  };
}

export const logOut = () => ({ type: "LOG_OUT" });

const userInfo = (data) => {
  return {
    type: "USER_PROFILE",
    payload: data,
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));

      // dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      // dispatch(appDoneLoading());
    } catch (error) {
      // if (error.response) {
      //   dispatch(setMessage("danger", true, error.response.data.message));
      // } else {
      //   dispatch(setMessage("danger", true, error.message));
      // }
      // dispatch(appDoneLoading());
      console.log(error);
    }
  };
};

export const fetchUserInfo = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;
    try {
      const response = await axios.get("http://localhost:4000/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(userInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function userSignUp(
  name,
  surname,
  email,
  password,
  phone,
  image,
  lat,
  long,
  address,
  postcode
) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:4000/signup", {
        name,
        surname,
        email,
        password,
        phone,
        image,
        lat,
        long,
        address,
        postcode,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addPost(title, description, price, imageUrl, tags) {
  return async function (dispatch, getState) {
    const token = selectToken(getState());

    if (token === null) return;
    try {
      const response = await axios.post(
        "http://localhost:4000/create",
        {
          title,
          description,
          price,
          imageUrl,
          tags,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(postCreated());
    } catch (error) {
      console.log(error);
    }
  };
}
