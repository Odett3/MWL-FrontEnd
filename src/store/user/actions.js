import axios from "axios";
import { selectToken } from "./selectors";

const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

export const logOut = () => ({ type: "LOG_OUT" });

const userInfo = (data) => {
  return {
    type: "USER_PROFILE",
    payload: data,
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    // dispatch(appLoading());
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

// export const fetchUserInfo = () => {
//   return async (dispatch, getState) => {
//     const token = selectToken(getState());
//     if (token === null) return;
//     try {
//       const response = await axios.get("http://localhost:4000/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       dispatch(userInfo(response.data));
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
