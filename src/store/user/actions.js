import axios from "axios";

const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

export const logOut = () => ({ type: "LOG_OUT" });

// const tokenStillValid = (userWithoutToken) => ({
//   type: TOKEN_STILL_VALID,
//   payload: userWithoutToken,
// });

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
