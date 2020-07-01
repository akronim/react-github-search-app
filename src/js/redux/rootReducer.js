import { combineReducers } from "redux";
import { userDataReducer, userReposReducer } from "./githubReducer";

export default combineReducers({
  userDataReducer,
  userReposReducer,
});
