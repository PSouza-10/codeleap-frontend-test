import { combineReducers } from "redux";
import * as posts from "./posts";

export const rootReducer = combineReducers({
  posts: posts.reducer,
});

export const initialState = {
  posts: posts.state,
};
