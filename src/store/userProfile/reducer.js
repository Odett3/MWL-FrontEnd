const initialState = {
  loading: true,
  profile: null,
  // comments: []
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "LISTING-LOADING": {
      return {
        loading: true,
        profile: null,
      };
    }
    case "INDIVIDUAL-PROFILE-FETCHED": {
      return {
        loading: false,
        profile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
