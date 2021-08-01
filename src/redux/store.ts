import { createStore } from "redux";
import { rootReducer, initialState } from "./reducers";

export type AppStore = typeof initialState;

const store = createStore(rootReducer);

export default store;
