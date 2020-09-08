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
        posts: [...action.payload],
      };
    }
    case "ADD_HEART":
      return {
        ...state,
        posts: { likes: action.payload },
      };

    case "POST_CREATED":
      return {
        ...state,
        posts: [...action.payload],
      };

    default: {
      return state;
    }
  }
}
