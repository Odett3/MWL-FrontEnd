import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import listingReducer from "./individualListing/reducer";
import profileReducer from "./userProfile/reducer";
import userReducer from "./user/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  listing: listingReducer,
  profile: profileReducer,
  user: userReducer,
});

export default reducer;
