export const REQUEST_USERDATA = "REQUEST_USERDATA";
export const RECEIVE_USERDATA = "RECEIVE_USERDATA";
export const RECEIVE_USERDATA_ERROR = "RECEIVE_USERDATA_ERROR";
export const REQUEST_REPOS = "REQUEST_REPOS";
export const RECEIVE_REPOS = "RECEIVE_REPOS";
export const RECEIVE_REPOS_ERROR = "RECEIVE_REPOS_ERROR";

export const requestUserData = () => ({
  type: REQUEST_USERDATA,
});

export const receiveUserData = (json) => ({
  type: RECEIVE_USERDATA,
  userData: json,
});

export const receiveUserDataErr = (error) => ({
  type: RECEIVE_USERDATA_ERROR,
  error,
});

export const requestRepos = () => ({
  type: REQUEST_REPOS,
});

export const receiveRepos = (json) => ({
  type: RECEIVE_REPOS,
  userRepos: json,
});

export const receiveReposErr = (error) => ({
  type: RECEIVE_REPOS_ERROR,
  error,
});
