const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  surname: null,
  image: null,
  listings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case "POST_CREATED":
      return {
        ...state,
        listings: [...state.user.listings, action.payload],
      };

    case "USER_PROFILE":
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        listings: action.payload.user.listings,
        image: action.payload.image,
      };

    case "LOG_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case "POST_DELETED":
      const postId = action.payload;
      const newListings = state.listings.filter((post) => post.id !== postId);
      return {
        ...state,

        listings: newListings,
      };

    default:
      return state;
  }
};
