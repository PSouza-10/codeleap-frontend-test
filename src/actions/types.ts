import { Post } from "../types";

export type PostActions =
  | {
      type: "ADD_POST";
      payload: Post;
    }
  | {
      type: "REMOVE_POST";
      payload: Post;
    }
  | {
      type: "LOAD_POSTS";
      payload?: never;
    }
  | {
      type: "UPDATE_POST";
      payload: Post;
    };
