import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
});

export default reducer;
