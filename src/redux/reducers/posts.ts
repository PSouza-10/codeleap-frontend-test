import { Reducer } from "react";
import { PostActions } from "../../actions/types";
import { POSTS_LOCALSTORAGE_KEY } from "../../constants";
import { Post } from "../../types";

export const state: Post[] = [];

export const reducer: Reducer<typeof state, PostActions> = (currentState = state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currentState, action.payload];
    case "REMOVE_POST":
      return currentState.filter(({ id }) => id !== action.payload.id);
    case "LOAD_POSTS":
      const savedPosts = localStorage.getItem(POSTS_LOCALSTORAGE_KEY);

      if (savedPosts) {
        return JSON.parse(savedPosts);
      } else {
        return currentState;
      }

    case "UPDATE_POST":
      const { id, ...postContent } = action.payload;
      let newPosts = Object.fromEntries(currentState.map((post) => [post.id, post]));

      newPosts[id] = {
        ...newPosts[id],
        ...postContent,
      };

      return Object.values(newPosts);
    default:
      return currentState;
  }
};
