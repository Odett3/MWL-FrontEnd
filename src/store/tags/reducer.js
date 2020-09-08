const initialState = {
  tags: [],
};

export default function tagsSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "TAGS-FETCHED": {
      return {
        tags: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
