const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case "USER_PROFILE":
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        listings: action.payload.listings,
        image: action.payload.image,
      };

    case "LOG_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    default:
      return state;
  }
};
