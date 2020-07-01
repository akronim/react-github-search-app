import {
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  RECEIVE_USERDATA_ERROR,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  RECEIVE_REPOS_ERROR,
} from "./actionCreators";

let userDataState = {
  user_data: {},
  loading: false,
  error: null,
};

export const userDataReducer = (state = userDataState, action) => {
  switch (action.type) {
    case REQUEST_USERDATA:
      return { ...state, loading: true, error: null };
    case RECEIVE_USERDATA:
      return { ...state, loading: false, user_data: action.userData };
    case RECEIVE_USERDATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        user_data: {},
      };
    default:
      return state;
  }
};

let userReposState = {
  user_repos: [],
  loading: false,
  error: null,
};

export const userReposReducer = (state = userReposState, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return { ...state, loading: true, error: null };
    case RECEIVE_REPOS:
      return { ...state, loading: false, user_repos: action.userRepos };
    case RECEIVE_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        user_repos: [],
      };
    default:
      return state;
  }
};
