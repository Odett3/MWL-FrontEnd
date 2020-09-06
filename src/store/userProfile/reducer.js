const initialState = {
  loading: true,
  profile: null,
  users: [],
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
        ...state,
        loading: false,
        profile: action.payload,
      };
    }
    case "ALL-PROFILES-FETCHED": {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
