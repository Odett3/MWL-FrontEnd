const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "FEED-START-LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FEED-POSTS-FETCHED": {
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
