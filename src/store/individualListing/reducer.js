// src/store/postPage/reducer.js

const initialState = {
  loading: true,
  post: null,
  // comments: []
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "LISTING-LOADING": {
      return {
        loading: true,
        post: null,
        //TODO comments: []
      };
    }
    case "INDIVIDUAL-POST-FETCHED": {
      return {
        loading: false,
        post: action.payload,
        // TODO comments: action.payload.comments
      };
    }
    default: {
      return state;
    }
  }
}