import { Reducer } from "redux";
import { UsernameActions } from "../../actions/types";

export const state: string = "";

export const reducer: Reducer<typeof state, UsernameActions> = (_, action) => {
  return action.payload || "";
};
