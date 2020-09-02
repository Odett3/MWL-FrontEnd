import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import listingReducer from "./individualListing/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  listing: listingReducer,
});

export default reducer;
