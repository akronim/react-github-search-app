import config from "../helpers/global-variables";
import githubService from "../helpers/github.service";
import * as actions from "./actionCreators";

export function fetchUserData(user) {
  let url = `${config.github_api_base_url}/${user}`;

  return (dispatch) => {
    dispatch(actions.requestUserData());

    return githubService
      .get(url, (json) => dispatch(actions.receiveUserData(json)))
      .catch((err) => dispatch(actions.receiveUserDataErr(err)));
  };
}

function fetchRepos(user) {
  let url = `${config.github_api_base_url}/${user}/repos`;

  return (dispatch) => {
    dispatch(actions.requestRepos());

    return githubService
      .get(url, (json) => dispatch(actions.receiveRepos(json)))
      .catch((err) => dispatch(actions.receiveReposErr(err)));
  };
}

export function fetchUserAndRepos(user) {
  return (dispatch) => {
    return dispatch(fetchUserData(user)).then(() => {
      return dispatch(fetchRepos(user));
    });
  };
}
